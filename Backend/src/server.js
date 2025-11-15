import dotenv from "dotenv";
import { app } from "./app.js";
import Main from "./config/db.js";

dotenv.config();
Main().catch((err) => {
  console.log("DB Failed", err);
  process.exit(1);
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 PORT IS LISTING : http://localhost:${process.env.PORT}`);
});
