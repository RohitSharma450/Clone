import {
  changePassword,
  forgotPassword,
  loginUser,
  logoutUser,
  refreshAccessToken,
  register,
  verifyPassword,
} from "../controllers/user.controller.js";
import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", upload.single("avatar"), register);

router.post("/login", loginUser);

router.post("/logout", authenticate, logoutUser);

router.post("/refresh-token", refreshAccessToken);

router.post("/forgot-password", forgotPassword);

router.post("/verify-password", verifyPassword);

router.post("/change-password", changePassword);

export default router;
