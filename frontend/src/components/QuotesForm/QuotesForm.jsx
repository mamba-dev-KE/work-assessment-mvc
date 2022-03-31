import "./QuotesForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const QuotesForm = () => {
  const [quotes, setQuotes] = useState({
    quote: "",
    author: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuote = {
      quote: quotes.quote,
      author: quotes.author,
    };

    axios
      .post("http://localhost:5000/api/quotes", newQuote, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

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
        <h1 className="form__title"> Add Quote</h1>
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
      </form>
    </section>
  );
};

export default QuotesForm;
