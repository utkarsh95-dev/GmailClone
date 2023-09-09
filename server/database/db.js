import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://utkarsh_:UttuTeraBaap@cluster0.xohkjfz.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log("DATABASE is now connected!!");
  } catch (error) {
    console.log("DataBase Could not be connected!!", error.message);
  }
};
