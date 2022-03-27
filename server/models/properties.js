import mongoose from "mongoose";

const propertiesSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Kindly fill before submitting"] },
    description: String,
    tags: [String],
  },
  { timestamps: true }
);

const propertiesModel = mongoose.model("propertiesModel", propertiesSchema);

export default propertiesModel;
