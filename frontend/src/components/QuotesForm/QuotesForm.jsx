import "./QuotesForm.scss";
import { formVariants } from "./Animation";
import { useState, useEffect } from "react";
import { createQuote, updateQuote } from "../../utils/utils";
import { motion } from "framer-motion";

const QuotesForm = ({
  quotesData,
  currentID,
  setCurrentID,
  isUpdate,
  setIsUpdate,
  isVisible,
  setIsVisible,
}) => {
  // quote state declaration
  const [quotes, setQuotes] = useState({
    quote: "",
    author: "",
  });

  // find the post being editted if currentID is not null
  const updatedPost = quotesData.find((quote) => quote._id === currentID);

  // update post
  useEffect(() => {
    if (updatedPost) {
      setQuotes(updatedPost);
    }
  }, [updatedPost]);

  // handle form submit -- update or create
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuote = {
      quote: quotes.quote,
      author: quotes.author,
    };
    // check for currentID and create or update depending on presence of id
    if (currentID) {
      updateQuote(currentID, newQuote).catch((error) => console.log(error));
      // hide form after quote creation
      setIsVisible(!isVisible);
      // switch is update to rerender UI
      setIsUpdate(!isUpdate);
      // clear fields after quote update
      clearFields();
    } else {
      createQuote(newQuote).catch((error) => console.log(error));
      // hide form after quote creation
      setIsVisible(!isVisible);
      // switch is update to rerender UI
      setIsUpdate(!isUpdate);
      // clear fields after quote creation
      clearFields();
    }
  };

  // handle form input for edit and create
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuotes({ ...quotes, [name]: value });
  };

  const clearFields = () => {
    // when clear button is pressed, reset currentID to null and clear form fields
    setCurrentID(null);
    setQuotes({
      quote: "",
      author: "",
    });
  };

  // hide and unhide form based on isVisible state
  const formStyle = {
    display: "none",
  };

  return (
    <motion.section
      className="quote__form grid"
      style={!isVisible ? formStyle : {}}
      variants={formVariants}
      initial="hidden"
      animate={isVisible ? "visible" : ""}
      exit="exit"
    >
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
        <button type="submit" className="form__btn pointer">
          {currentID ? "Edit" : "Add"} Quote
        </button>
        <button onClick={clearFields} className="form__btn pointer">
          Clear Fields
        </button>
      </form>
    </motion.section>
  );
};

export default QuotesForm;
