import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import "dotenv/config";
import cors from "cors";

import quoteRoutes from "./routes/quotes.js";
import dbConnect from "./db/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// database connection
dbConnect();

// middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: false, limit: "30mb" }));
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/quotes", quoteRoutes);

//test if API works
app.get("/", (req, res) => {
  res.status(200).json({ message: "API works" });
});

// server connection
app.listen(PORT, () => {
  console.log(chalk.cyan(`Server running on port: ${PORT}`));
});
