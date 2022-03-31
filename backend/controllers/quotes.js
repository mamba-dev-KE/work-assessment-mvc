import Quotes from "../models/Quote.js";

/**
 * HTTP STATUS CODES
 * 400:bad request,
 * 404: not found,
 * 500: internal server error
 * 200: OK
 **/

// get quotes
export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quotes.find();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// create quotes
export const createQuote = async (req, res) => {
  try {
    const quote = await Quotes.create(req.body);
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// update quotes
export const updateQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await Quotes.findById(id);

    if (!quote) {
      return res
        .status(404)
        .json({ message: `Quote with id: ${id} does not exist` });
    }

    const updatedQuote = await Quotes.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(updatedQuote);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// delete quote
export const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await Quotes.findByIdAndDelete(id);

    if (!quote) {
      return res
        .status(404)
        .json({ message: `Quote with id: ${id} does not exist` });
    }
    res
      .status(200)
      .json({ message: `Successfully deleted quote with id: ${id}` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
