import axios from "axios";

const baseURL = "/api/quotes";

// all CRUD methods for the api
export const createQuote = async (newQuote) =>
  await axios.post(`${baseURL}`, newQuote);
export const readQuotes = async () => await axios.get(`${baseURL}`);
export const updateQuote = async (id, newQuote) =>
  await axios.patch(`${baseURL}/${id}`, newQuote);
export const deleteQuote = async (id) => await axios.delete(`${baseURL}/${id}`);
