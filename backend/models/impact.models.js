import mongoose, { Schema } from "mongoose";

const impactSchema = new Schema(
  {
    details: {
      type: String,
      required: true,
    },
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Impact = mongoose.model("Impact", impactSchema);

export default Impact;
