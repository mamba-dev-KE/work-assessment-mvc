import mongoose from "mongoose";
import chalk from "chalk";

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(chalk.cyan(`MongoDB connected: ${connect.connection.host}`));
  } catch (error) {
    console.log(error.message);
  }
};

export default dbConnect;
