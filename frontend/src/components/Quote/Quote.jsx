import "./Quote.scss";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const Quote = ({ quote, author, _id }) => {
  const handleClick = () => {
    axios.delete(`http://localhost:5000/api/quotes/${_id}`);
  };

  return (
    <article className="quote center">
      <h3 className="quote__text">{quote}</h3>
      <p className="quote__author">{author}</p>
      <div className="quote__edit flex">
        <MdDelete className="quote__delete pointer" onClick={handleClick} />
        <FaEdit className="quote__edit pointer" />
      </div>
    </article>
  );
};

export default Quote;
