import { register } from "../controllers/user.controller.js";
import express from "express";
import { upload } from "../middleware/multer.middlware.js";

const router = express.Router();

router.post("/register",upload.single('avatar'), register);

export default router;
