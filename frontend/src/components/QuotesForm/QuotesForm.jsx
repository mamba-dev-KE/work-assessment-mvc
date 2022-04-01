import "./QuotesForm.scss";
import { useState, useEffect } from "react";
import { createQuote, updateQuote } from "../../utils/utils";

const QuotesForm = ({ quotesData, currentID }) => {
  const [quotes, setQuotes] = useState({
    quote: "",
    author: "",
  });

  const updatedPost = quotesData.find((quote) => quote._id === currentID);
  console.log(updatedPost);

  // update post
  useEffect(() => {
    if (updatedPost) {
      setQuotes(updatedPost);
    }
  }, [updatedPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuote = {
      quote: quotes.quote,
      author: quotes.author,
    };

    if (currentID) {
      updateQuote(currentID, newQuote).catch((error) => console.log(error));
    } else {
      createQuote(newQuote).catch((error) => console.log(error));
    }

    setQuotes({
      quote: "",
      author: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuotes({ ...quotes, [name]: value });
  };

  return (
    <section className="quote__form grid">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title"> {currentID ? "Edit" : "Add"} Quote</h1>
        <label htmlFor="quote">Quote:</label>
        <textarea
          className="center"
          value={quotes.quote}
          name="quote"
          onChange={handleChange}
        />

        <label htmlFor="author">Quote Author:</label>
        <input
          type="text"
          name="author"
          className="center"
          id="author"
          value={quotes.author}
          onChange={handleChange}
        />
        <button type="submit">Add Quote</button>
        <button type="submit">Clear Fields</button>
      </form>
    </section>
  );
};

export default QuotesForm;
