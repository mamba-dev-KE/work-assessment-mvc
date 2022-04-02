import React, { useState, useEffect } from "react";
import "./App.scss";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import NavBar from "./components/NavBar/NavBar";
import QuotesForm from "./components/QuotesForm/QuotesForm";
import Quotes from "./components/Quotes/Quotes";
import { readQuotes } from "./utils/utils";

const App = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [currentID, setCurrentID] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    readQuotes().then((res) => {
      setQuotesData(res.data);
    });
  }, [currentID]);

  const containerStyles = {
    gridTemplateColumns: "100%",
  };

  return (
    <>
      <NavBar isVisible={isVisible} setIsVisible={setIsVisible} />
      <motion.div
        className="app__container container center grid"
        style={isVisible ? "" : containerStyles}
        layout
      >
        <QuotesForm
          quotesData={quotesData}
          currentID={currentID}
          setCurrentID={setCurrentID}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <Quotes
          quotesData={quotesData}
          currentID={currentID}
          setCurrentID={setCurrentID}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      </motion.div>
    </>
  );
};

export default App;
