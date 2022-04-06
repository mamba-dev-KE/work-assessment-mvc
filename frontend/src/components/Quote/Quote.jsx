import "./Quote.scss";
import { quoteVariant } from "./Animation";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteQuote } from "../../utils/utils";
import { motion } from "framer-motion";

const Quote = ({
  quote,
  author,
  setCurrentID,
  _id,
  isUpdate,
  setIsUpdate,
  setIsVisible,
}) => {
  // function to handle clicking on the delete button
  const handleDelete = () => {
    deleteQuote(_id);
    setIsUpdate(!isUpdate);
  };

  // function to handle clicking on edit button
  const handleEdit = () => {
    setCurrentID(_id);
    setIsVisible(true);
  };

  return (
    <motion.article
      className="quote center grid"
      variants={quoteVariant}
      layout
    >
      <h3 className="quote__text">" {quote} "</h3>
      <p className="quote__author">{author}</p>
      <div className="quote__edit flex">
        <MdDelete className="quote__delete pointer" onClick={handleDelete} />
        <FaEdit className="quote__edit pointer" onClick={handleEdit} />
      </div>
    </motion.article>
  );
};

export default Quote;
