// import propertiesModel from "../models/properties";

// get properties
export const getProperties = async (req, res) => {
  res.status(200).json({ message: `get property` });
};

// create property
export const createProperty = async (req, res) => {
  if (req.body === {}) {
    res.status(400).json({ message: "Please fill the form and try again" });
  }
  res.status(200).json({ message: `create property` });
};

export const updateProperty = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `update property ${id}` });
};

export const deleteProperty = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete property ${id}` });
};
