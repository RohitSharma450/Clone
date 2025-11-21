import mongoose from "mongoose";
import { DATA_BASE_NAME } from "../constants.js";

const Main = async () => {
  try {
    const DATA_BASE = await mongoose.connect(
      `${process.env.MONGO_URI}/${DATA_BASE_NAME}`
    );
    console.log(`⚙  DB HOST : ${DATA_BASE.connection.host}`);
  } catch (error) {
    console.log("DATA_BASE ERROR : ", error);
    process.exit(1);
  }
};

export default Main;
