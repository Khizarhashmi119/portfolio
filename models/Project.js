import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    detail: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
