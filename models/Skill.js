const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Skill = mongoose.model("Skill", skillSchema);
