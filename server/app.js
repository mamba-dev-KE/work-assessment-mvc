import express from "express";
import mongoose from "mongoose";
import chalk from "chalk";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware

//routes

app.get("/properties", (req, res) => {
  res.json({ message: "hello" });
});

// mongoose and server connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.blue(`Server running on port: ${PORT}`));
    });
  })
  .catch((error) => console.log(chalk.red(error.message)));
