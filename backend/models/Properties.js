import mongoose from "mongoose";

const PropertiesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Kindly fill before submitting"],
      maxlength: [20, "name cannot be more than 20 characters"],
    },
    description: String,
    tags: [String],
    selectedFile: String,
  },
  { timestamps: true }
);

const Properties = mongoose.model("Properties", PropertiesSchema);

export default Properties;
