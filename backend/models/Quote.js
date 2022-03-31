import mongoose from "mongoose";

const QuotesSchema = mongoose.Schema(
  {
    quote: {
      type: String,
      required: [true, "Kindly fill before submitting"],
    },
    author: { type: String, required: [true, "Kindly fill before submitting"] },
  },
  { timestamps: true }
);

const Quotes = mongoose.model("Quotes", QuotesSchema);

export default Quotes;
