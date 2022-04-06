import React, { useState, useEffect } from "react";
import "./App.scss";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import NavBar from "./components/NavBar/NavBar";
import QuotesForm from "./components/QuotesForm/QuotesForm";
import Quotes from "./components/Quotes/Quotes";
import Loading from "./components/Loading/Loading";
import { readQuotes } from "./utils/utils";

const App = () => {
  // state for holding fetched quotes from mongodb
  const [quotesData, setQuotesData] = useState([]);
  // state for holding the ID of a quote that is to be updated
  const [currentID, setCurrentID] = useState(null);
  // state for holding boolean for whether form is visible or not
  const [isVisible, setIsVisible] = useState(false);
  // state for holding update status of quote
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    readQuotes().then((res) => {
      setQuotesData(res.data);
    });
    if (isUpdate || !isUpdate) {
      readQuotes().then((res) => {
        setQuotesData(res.data);
      });
    }
  }, [currentID, isUpdate, isVisible]);

  // dynamic styles injected and removed based on isVisible state
  const containerStyles = {
    gridTemplateColumns: "100%",
  };

  // app container animations
  const containerVariants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <NavBar isVisible={isVisible} setIsVisible={setIsVisible} />
      <motion.div
        className="app__container container center grid"
        style={isVisible ? "" : containerStyles}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {quotesData.length === 0 ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </motion.div>
    </>
  );
};

export default App;
