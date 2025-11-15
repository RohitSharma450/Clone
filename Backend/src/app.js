import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOption = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(202).json({ message: "Server is runing." });
});

export { app };
