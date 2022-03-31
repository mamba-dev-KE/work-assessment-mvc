import "./Quote.scss";

const Quote = ({ quote, author }) => {
  return (
    <article className="quote center">
      <h3 className="quote__title">{quote}</h3>
      <p className="quote__text">{author}</p>
    </article>
  );
};

export default Quote;
