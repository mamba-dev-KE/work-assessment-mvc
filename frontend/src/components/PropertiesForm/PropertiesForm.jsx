import { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";

const PropertiesForm = () => {
  const [properties, setProperties] = useState({
    name: "",
    description: "",
    selectedFile: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProperty = {
      name: properties.name,
      description: properties.description,
      selectedFile: properties.selectedFile,
    };

    axios
      .post("http://localhost:8000/api/properties", newProperty, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setProperties({
      name: "",
      description: "",
      selectedFile: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperties({ ...properties, [name]: value });
  };

  return (
    <section>
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
        <textarea
          value={properties.description}
          name="description"
          onChange={handleChange}
        />

        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProperties({ ...properties, selectedFile: base64 })
            }
          />
        </div>
        <button type="submit">Add Property</button>
      </form>
    </section>
  );
};

export default PropertiesForm;
