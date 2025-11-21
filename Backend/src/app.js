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

import userRouter from "./routes/user.router.js";

//use routes
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.status(202).json({ message: "Server is runing." });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({ message });
});


export { app };
