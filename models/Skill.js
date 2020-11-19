const mongoose = require("mongoose");

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

module.exports = Skill = mongoose.model("Skill", skillSchema);
