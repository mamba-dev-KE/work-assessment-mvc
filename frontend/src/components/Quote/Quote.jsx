import { useState } from "react";
import "./Quote.scss";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import UpdateForm from "../UpdateForm/UpdateForm";

const Quote = ({ quote, author, _id }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <>
      {!isUpdate ? (
        <article className="quote center">
          <h3 className="quote__text">{quote}</h3>
          <p className="quote__author">{author}</p>
          <div className="quote__edit flex">
            <MdDelete className="quote__delete pointer" />
            <FaEdit
              className="quote__edit pointer"
              onClick={() => {
                setIsUpdate(!isUpdate);
              }}
            />
          </div>
        </article>
      ) : (
        <UpdateForm />
      )}
    </>
  );
};

export default Quote;
