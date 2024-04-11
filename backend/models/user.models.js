import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    member: {
      type: String,
      enum: ["Member", "Non-Member"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

export default User;
