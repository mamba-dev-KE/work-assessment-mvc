import axios from "axios";

const baseURL = "/api/quotes";

// all CRUD methods for the api
export const createQuote = (newQuote) => axios.post(`${baseURL}`, newQuote);
export const readQuotes = () => axios.get(`${baseURL}`);
export const updateQuote = (id, newQuote) =>
  axios.patch(`${baseURL}/${id}`, newQuote);
export const deleteQuote = (id) => axios.delete(`${baseURL}/${id}`);
