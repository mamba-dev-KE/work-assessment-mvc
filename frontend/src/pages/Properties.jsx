import "./Properties.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Property from "../components/Property/Property";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/properties").then((res) => {
      setProperties(res.data);
    });
  }, []);

  console.log(properties);

  return (
    <section className="properties">
      <h1 className="properties__title">Our Properties</h1>
      <div className="properties__container grid">
        {properties.map((property) => (
          <Property {...property} key={property._id} />
        ))}
      </div>
    </section>
  );
};

export default Properties;
