import axios from "axios";

const url = "/api/quotes";

export const createQuote = (newQuote) => axios.post(`${url}`, newQuote);
export const readQuotes = (url) => axios.get(url);
export const updateQuote = (id, newQuote) =>
  axios.patch(`${url}/${id}`, newQuote);
export const deleteQuote = (url) => axios.delete(url);

// axios.patch(`/api/quotes/${currentID}`, newQuote);
