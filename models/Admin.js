import mongoose from "mongoose";
import { v4 } from "uuid";

import crypto from "crypto";

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    encryPassword: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    saltRounds: {
      type: Number,
      default: 10,
    },
  },
  { timestamps: true }
);

adminSchema.methods = {
  securePassword: function (password) {
    for (let i = 0; i < this.saltRounds; i++) {
      password = crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    }

    return password;
  },

  checkPassword: function (password) {
    return this.encryPassword === this.securePassword(password);
  },
};

adminSchema.virtual("password").set(function (password) {
  this.salt = v4();
  this.encryPassword = this.securePassword(password);
});

export default mongoose.model("Admin", adminSchema);
