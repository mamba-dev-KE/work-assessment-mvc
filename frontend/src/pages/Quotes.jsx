import "./Quotes.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Quote from "../components/Quote/Quote";

const Properties = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/quotes").then((res) => {
      setQuotes(res.data);
    });
  }, []);

  console.log(quotes);

  return (
    <section className="properties">
      <h1 className="properties__title">Quotes</h1>
      <div className="properties__container grid container center">
        {quotes.map((Quotes) => (
          <Quote {...Quotes} key={Quotes._id} />
        ))}
      </div>
    </section>
  );
};

export default Properties;
