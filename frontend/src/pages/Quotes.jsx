import "./Quotes.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Quote from "../components/Quote/Quote";

const Properties = () => {
  const [quotes, setQuotes] = useState([]);

  // const handleClick = () => {
  //   axios.delete(`http://localhost:5000/api/quotes/${_id}`);
  // };

  useEffect(() => {
    axios.get("http://localhost:5000/api/quotes").then((res) => {
      setQuotes(res.data);
    });
  }, []);

  return (
    <section className="quotes">
      <h1 className="quotes__title">Quotes</h1>
      <div className="quotes__container container grid center">
        {quotes.map((Quotes) => (
          <Quote {...Quotes} key={Quotes._id} />
        ))}
      </div>
    </section>
  );
};

export default Properties;
