import React from "react";

const Property = ({ name, description, selectedFile }) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={selectedFile} alt={name} />
    </article>
  );
};

export default Property;
