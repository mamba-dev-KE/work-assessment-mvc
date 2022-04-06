import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import "dotenv/config";
import cors from "cors";

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import quoteRoutes from "./routes/quotes.js";
import dbConnect from "./db/db.js";

// variable declarations
const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// database connection
dbConnect();

// middleware
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: false, limit: "30mb" }));
app.use(express.static(resolve(__dirname, "../frontend/build")));
app.use(morgan("dev"));

//routes
app.use("/api/quotes", quoteRoutes);

//test if API works after deployment
app.get("/", (req, res) => {
  res.status(200).json({ message: "API works" });
});

// all other requests will be redirected to index page
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

// server connection
app.listen(PORT, () => {
  console.log(chalk.cyan(`Server running on port: ${PORT}`));
});
