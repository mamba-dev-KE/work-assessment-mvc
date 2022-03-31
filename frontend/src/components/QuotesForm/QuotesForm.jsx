import { useState } from "react";
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
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quote">Quote</label>
        <input
          type="text"
          name="quote"
          id="quote"
          placeholder="Enter quote."
          value={quotes.quote}
          onChange={handleChange}
        />

        <label htmlFor="quote">Quote Author</label>
        <textarea value={quotes.author} name="author" onChange={handleChange} />
        <button type="submit">Add Quote</button>
      </form>
    </section>
  );
};

export default QuotesForm;
