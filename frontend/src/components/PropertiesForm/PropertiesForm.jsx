import { useState } from "react";

const PropertiesForm = () => {
  const [formData, setformData] = useState({});
  const [properties, setProperties] = useState({ name: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperties({ [name]: value });
  };

  return (
    <section>
      <h1>Properties Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Property Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter property name"
          value={properties.name}
          onChange={handleChange}
        />

        <label htmlFor="name">Property Description</label>
        <textarea value={properties.description} onChange={handleChange} />
        <button>Add Property</button>
      </form>

      {properties.name}
    </section>
  );
};

export default PropertiesForm;
