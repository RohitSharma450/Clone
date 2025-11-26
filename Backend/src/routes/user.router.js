import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  register,
} from "../controllers/user.controller.js";
import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", upload.single("avatar"), register);

router.post("/login", loginUser);

router.post("/logout", authenticate, logoutUser);

router.post("/refresh-token", refreshAccessToken);

export default router;
