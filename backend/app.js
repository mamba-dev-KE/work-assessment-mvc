import express from "express";
import chalk from "chalk";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

import propertyRoutes from "./routes/properties.js";
import dbConnect from "./db/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// database connection
dbConnect();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/properties", propertyRoutes);

// server connection
app.listen(PORT, () => {
  console.log(chalk.cyan(`Server running on port: ${PORT}`));
});
