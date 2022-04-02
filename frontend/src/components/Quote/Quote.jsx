import "./Quote.scss";
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
  isVisible,
  setIsVisible,
}) => {
  const handleDelete = () => {
    deleteQuote(_id);
    setIsUpdate(!isUpdate);
  };

  const handleEdit = () => {
    setCurrentID(_id);
    setIsVisible(!isVisible);
  };

  const articleVariant = {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  };

  return (
    <motion.article
      className="quote center"
      variants={articleVariant}
      initial="hidden"
      animate="visible"
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
