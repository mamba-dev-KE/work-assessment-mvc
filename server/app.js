import express from "express";
import mongoose from "mongoose";
import chalk from "chalk";
import "dotenv/config";

import propertyRoutes from "./routes/properties.js";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware

//routes
app.use("/api/properties", propertyRoutes);

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
