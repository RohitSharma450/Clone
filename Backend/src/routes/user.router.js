import {
  loginUser,
  logoutUser,
  register,
} from "../controllers/user.controller.js";
import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", upload.single("avatar"), register);

router.post("/login", loginUser);

router.post("/logout", authenticate, logoutUser);

export default router;
