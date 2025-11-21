import { User } from "../models/user.model.js";
import { ApiErrorHandler } from "../utils/apiErrorHandler.js";
import { asyncHandler } from "../utils/asyncHandler.js";

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

  const user = await User.findOne({ email }).select("-password");

  res.status(200).json({data: user, message: "User registered successfully" });
});

export { register };
