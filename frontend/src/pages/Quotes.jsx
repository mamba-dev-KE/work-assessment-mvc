import "./Quotes.scss";
import Quote from "../components/Quote/Quote";

const Quotes = ({ setCurrentID, quotesData, isUpdate, setIsUpdate }) => {
  return !quotesData.length ? (
    "Loading"
  ) : (
    <>
      <section className="quotes">
        <h1 className="quotes__title">Quotes</h1>
        <div className="quotes__container container grid center">
          {quotesData.map((quote) => (
            <Quote
              {...quote}
              key={quote._id}
              setCurrentID={setCurrentID}
              isUpdate={isUpdate}
              setIsUpdate={setIsUpdate}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Quotes;
