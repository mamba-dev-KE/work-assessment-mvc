import express from "express";
import {
  getProperties,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/properties.js";

const router = express.Router();

router.route("/").get(getProperties).post(createProperty);
router.route("/:id").put(updateProperty).delete(deleteProperty);

export default router;
