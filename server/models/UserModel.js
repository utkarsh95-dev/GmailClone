import mongoose from "mongoose";

const UserSchema = {
  name: {
    type: String,
  },
  email: {
    type: String,
  },
};

export const User = mongoose.model("User", UserSchema);
