import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import QuotesForm from "./components/QuotesForm/QuotesForm";

import Quotes from "./pages/Quotes";

const App = () => {
  return (
    <Router>
      <div className="app_container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Quotes />} />
          <Route path="/add" element={<QuotesForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
