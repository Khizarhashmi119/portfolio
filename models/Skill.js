import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
