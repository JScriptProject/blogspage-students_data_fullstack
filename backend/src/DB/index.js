import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectDB() {
  try {
    const DB_URL = process.env.MONGO_URL.replace(
      "<db_user>",
      process.env.MONGO_USER
    ).replace(
      "<db_password>",
      process.env.MONGO_PASSWORD
    );
    const dbConnection = await mongoose.connect(`${DB_URL}/blogspageDB`);
    console.log("Succesfully Connected!!", dbConnection.connections[0].host);
  } catch (error) {
    console.error("Error occured in DB connection!", error);
    process.exit(1)
  }
}
export { connectDB };
