import express from "express";
import {
  getQuotes,
  createQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quotes.js";

const router = express.Router();

router.route("/").get(getQuotes).post(createQuote);
router.route("/:id").patch(updateQuote).delete(deleteQuote);

export default router;
