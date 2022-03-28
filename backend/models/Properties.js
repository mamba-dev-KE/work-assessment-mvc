import mongoose from "mongoose";

const PropertiesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Kindly fill before submitting"],
    },
    description: String,
    selectedFile: String,
  },
  { timestamps: true }
);

const Properties = mongoose.model("Properties", PropertiesSchema);

export default Properties;
