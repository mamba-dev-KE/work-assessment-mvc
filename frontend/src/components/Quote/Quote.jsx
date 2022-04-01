import "./Quote.scss";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteQuote } from "../../utils/utils";

const Quote = ({ quote, author, setCurrentID, _id }) => {
  const handleDelete = () => {
    deleteQuote(`/api/quotes/${_id}`);
  };

  return (
    <article className="quote center">
      <h3 className="quote__text">{quote}</h3>
      <p className="quote__author">{author}</p>
      <div className="quote__edit flex">
        <MdDelete className="quote__delete pointer" onClick={handleDelete} />
        <FaEdit
          className="quote__edit pointer"
          onClick={() => {
            setCurrentID(_id);
          }}
        />
      </div>
    </article>
  );
};

export default Quote;
