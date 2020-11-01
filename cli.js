import { config } from "dotenv";
import { program } from "commander";
import inquirer from "inquirer";
import mongoose from "mongoose";

import Admin from "./models/Admin.js";

config();
const { prompt } = inquirer;

const conn = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const questions = [
  {
    type: "input",
    name: "email",
    message: "Enter your email ?",
  },
  {
    type: "password",
    name: "password",
    message: "Enter your password ?",
  },
];

program.version("1.0.0").description("Create admin CLI tool.");

program
  .command("create-admin")
  .alias("c")
  .description("Create admin.")
  .action(async () => {
    const answers = await prompt(questions);
    if (!answers.email && !answers.password) {
      console.info("Please enter required fields.");
      await conn.disconnect();
    } else {
      try {
        const newAdmin = new Admin(answers);
        await newAdmin.save();
        console.info("Admin is successfully created.");
        await conn.disconnect();
      } catch (err) {
        console.error(err);
        await conn.disconnect();
      }
    }
  });

program.parse(process.argv);
