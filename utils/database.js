import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongo db is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // console.log(r);
    isConnected = true;
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
