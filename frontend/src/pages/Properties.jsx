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
    <section>
      {properties.map((property) => (
        <Property {...property} key={property._id} />
      ))}
    </section>
  );
};

export default Properties;
