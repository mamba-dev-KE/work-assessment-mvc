import Properties from "../models/Properties.js";

/**
 * HTTP STATUS CODES
 * 400:bad request,
 * 404: not found,
 * 500: internal server error
 * 200: OK
 **/

// get properties
export const getProperties = async (req, res) => {
  try {
    const properties = await Properties.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// create property
export const createProperty = async (req, res) => {
  try {
    const property = await Properties.create(req.body);
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// update property
export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Properties.findById(id);

    if (!property) {
      return res
        .status(404)
        .json({ message: `Property with id: ${id} does not exist` });
    }

    const updatedProperty = await Properties.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// delete property
export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Properties.findByIdAndDelete(id);

    if (!property) {
      return res
        .status(404)
        .json({ message: `Property with id: ${id} does not exist` });
    }
    res
      .status(200)
      .json({ message: `Successfully deleted property with id: ${id}` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
