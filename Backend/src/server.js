import dotenv from "dotenv";
import express from "express";
import Main from "./config/db.js";

dotenv.config();
Main();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`🚀 PORT IS LISTING : http://localhost:${process.env.PORT}`);
});
