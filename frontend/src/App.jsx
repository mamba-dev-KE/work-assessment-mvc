import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import QuotesForm from "./components/QuotesForm/QuotesForm";
import Quotes from "./pages/Quotes";
import { readQuotes } from "./utils/utils";

const App = () => {
  const [quotesData, setQuotesData] = useState([]);
  const [currentID, setCurrentID] = useState(null);

  useEffect(() => {
    readQuotes("/api/quotes").then((res) => {
      setQuotesData(res.data);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <QuotesForm
        quotesData={quotesData}
        currentID={currentID}
        setCurrentID={setCurrentID}
      />
      <Quotes
        quotesData={quotesData}
        currentID={currentID}
        setCurrentID={setCurrentID}
      />
    </div>
    // <Router>
    //   <div className="app_container">
    //     <NavBar />
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <Quotes
    //             quotesData={quotesData}
    //             currentID={currentID}
    //             setCurrentID={setCurrentID}
    //           />
    //         }
    //       />
    //       <Route
    //         path="/add"
    //         element={
    //           <QuotesForm
    //             quotesData={quotesData}
    //             currentID={currentID}
    //             setCurrentID={setCurrentID}
    //           />
    //         }
    //       />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
