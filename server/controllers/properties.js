export const getProperties = (req, res) => {
  res.status(200).json({ message: `get property` });
};

export const createProperty = (req, res) => {
  res.status(200).json({ message: `create property` });
};

export const updateProperty = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `update property ${id}` });
};

export const deleteProperty = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `delete property ${id}` });
};
