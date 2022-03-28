import "./Property.scss";

const Property = ({ name, description, selectedFile }) => {
  return (
    <article className="property center">
      <img className="property__img" src={selectedFile} alt={name} />
      <h3 className="property__title">{name}</h3>
      <p className="property__text">{description}</p>
    </article>
  );
};

export default Property;
