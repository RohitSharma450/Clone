import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiErrorHandler } from "../utils/apiErrorHandler.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendEmail } from "../utils/emailService.js";
import { forgetPasswordEmail, registerEmail } from "../utils/genrateEmail.js";

const cookieOptions = {
  httpOnly: true,
  sameSite: "strict",
};

function generateOTP(l) {
  const numbers = "1234567890";
  let otp = "";

  for (let i = 0; i < l; i++) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    otp += numbers[randomIndex];
  }

  return otp;
}

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new ApiErrorHandler(401, "Email is required.");
  }

  const user = await User.findOne({ email }).select("-password -refresh_token");

  if (!user) {
    throw new ApiErrorHandler(404, "User not found.");
  }

  const otp = generateOTP(4);
  user.otp = otp;
  user.otp_expires = Date.now() + 10 * 60 * 1000;

  const { subject, text } = forgetPasswordEmail(user);
  await sendEmail(user.email, subject, text);
  await user.save();

  res.status(200).json({
    message: "OTP send to your email.",
  });
});

const verifyPassword = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    throw new ApiErrorHandler(401, "All fields are required.");
  }

  const user = await User.findOne({ email }).select("-password -refresh_token");

  if (!user) {
    throw new ApiErrorHandler(404, "User not found.");
  }

  if (user.otp_expires < Date.now()) {
    throw new ApiErrorHandler(400, "OTP has expired.");
  }

  if (user.otp !== otp) {
    return res.status(401).json({ message: "Wrong OTP" });
  }

  user.otp = null;
  user.otp_expires = null;
  await user.save();

  res.status(200).json({
    message: "OTP verified successfully.",
  });
});

const generateTokens = async (userId) => {
  try {
    let user = await User.findById(userId).select("-password -refresh_token");

    if (!user) {
      throw new ApiErrorHandler(404, "User not found");
    }

    let accessToken = user.generateAccessToken();
    let refreshToken = user.generateRefreshToken();

    user.refresh_token = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error generating tokens:", error);
    throw new ApiErrorHandler(500, "Token generation failed");
  }
};

const refreshAccessToken = asyncHandler(async (req, res) => {
  const refresh_token = req.cookies.refresh_token || req.body.refresh_token;

  if (!refresh_token) {
    throw new ApiErrorHandler(401, "Refresh token is missing");
  }

  try {
    const decoded = jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET);

    if (!decoded) {
      throw new ApiErrorHandler(403, "Invalid refresh token");
    }

    const user = await User.findById(decoded._id);

    if (!user) {
      throw new ApiErrorHandler(404, "User not found");
    }

    if (user.refresh_token !== refresh_token) {
      throw new ApiErrorHandler(403, "Refresh token does not match");
    }

    const { accessToken, refreshToken } = await generateTokens(user._id);

    return res
      .status(200)
      .cookie("access_token", accessToken, cookieOptions)
      .cookie("refresh_token", refreshToken, cookieOptions)
      .json({
        data: {
          accessToken,
          refreshToken,
        },
        message: "Access token refreshed successfully",
      });
  } catch (error) {
    console.log("Refresh Error : ", error.message);
    throw new ApiErrorHandler(403, "Invalid refresh token");
  }
});

const register = asyncHandler(async (req, res) => {
  const { user_name, full_name, email, password } = req.body;
  const avatar = req.file?.path;

  if ([user_name, full_name, email, password].some((field) => !field)) {
    throw new ApiErrorHandler(404, "All fields are required");
  }

  if (!avatar) {
    throw new ApiErrorHandler(400, "Avatar image is required");
  }

  const existedUser = await User.findOne({
    $or: [{ email: email }, { user_name: user_name }],
  });

  if (existedUser) {
    throw new ApiErrorHandler(409, "User already exists");
  }

  await User.create({
    user_name,
    full_name,
    email,
    password,
    avatar,
  });

  const user = await User.findOne({ email }).select("-password -refresh_token");

  const { subject, htmlContent } = registerEmail(user);

  await sendEmail(user.email, subject, htmlContent);

  res.status(200).json({
    data: user,
    message: "User registered successfully",
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, user_name, password } = req.body;

  if (![email && password] && ![user_name && password]) {
    throw new ApiErrorHandler(400, "All fields are required");
  }

  const user = await User.findOne({
    $or: [{ email: email }, { user_name: user_name }],
  });

  if (!user || !(await user.isPasswordMatched(password))) {
    throw new ApiErrorHandler(401, "Invalid credentials");
  }

  const tokens = await generateTokens(user._id);
  const loggedInUser = await User.findById(user._id).select(
    "-password -refresh_token"
  );

  res
    .status(200)
    .cookie("refresh_token", tokens.refreshToken, cookieOptions)
    .cookie("access_token", tokens.accessToken, cookieOptions)
    .json({
      data: {
        user: loggedInUser,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
      message: "User logged in successfully",
    });
});

const logoutUser = asyncHandler(async (req, res) => {
  let user = req.user;

  await User.findByIdAndUpdate(user._id, {
    $set: { refresh_token: null },
    new: true,
  });

  res
    .status(200)
    .cookie("access_token", "", cookieOptions)
    .cookie("refresh_token", "", cookieOptions)
    .json({ message: "User logged out successfully", data: null });
});

export {
  register,
  loginUser,
  logoutUser,
  refreshAccessToken,
  forgotPassword,
  verifyPassword,
};
