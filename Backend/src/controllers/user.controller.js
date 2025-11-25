import { User } from "../models/user.model.js";
import { ApiErrorHandler } from "../utils/apiErrorHandler.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateTokens = async (userId) => {
  try {
    let user = await User.findById(userId).select("-password -refresh_token");

    let accessToken = user.generateAccessToken()
    let refreshToken = user.generateRefreshToken()
    user.refresh_token = refreshToken;
    await user.save();

    return {accessToken, refreshToken };
  } catch (error) {
    throw new ApiErrorHandler(500, "Token generation failed");    
  }
}

const register = asyncHandler(async (req, res) => {
  const { user_name, full_name, email, password } = req.body;
  const avatar = req.file.path;

  if ([user_name, full_name, email, password].some(field => !field)) {
    throw new ApiErrorHandler(404, "All fields are required");
  }

  if (!avatar) {
    throw new ApiErrorHandler(400, "Avatar image is required");
  }

  const existedUser = await User.findOne({$or: [{ email: email },{ user_name: user_name }]});

  if (existedUser) {
    throw new ApiErrorHandler(409, "User with this email or username already exists");
  }

  await User.create({
    user_name,
    full_name,
    email,
    password,
    avatar
  });

  const user = await User.findOne({ email }).select("-password -refresh_token");

  res.status(200).json({data: user, message: "User registered successfully" });
});

const loginUser = asyncHandler(async (req, res) => {
  const {email, user_name, password} = req.body

  if(![email && password] && ![user_name && password]){
    throw new ApiErrorHandler(400, "All fields are required");
  }

  const user = await User.findOne({$or: [{ email: email },{ user_name: user_name }]});

  if(!user || !(await user.isPasswordMatched(password))){
    throw new ApiErrorHandler(401, "Invalid credentials");
  }

  const tokens = await generateTokens(user._id);

  const cookieOptions = {
    httpOnly: true,
    sameSite: "strict",
  };

  res.status(200)
  .cookie("refresh_token", tokens.refreshToken, cookieOptions)
  .cookie("access_token", tokens.accessToken, cookieOptions)
  .json({data: {
    user: user,
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken
  },
   message: "User logged in successfully" 
  });
});

export { register , loginUser };
