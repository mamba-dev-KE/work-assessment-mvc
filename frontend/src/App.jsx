import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PropertiesForm from "./components/PropertiesForm/PropertiesForm";

import Properties from "./pages/Properties";

const App = () => {
  return (
    <Router>
      <div className="app_container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add" element={<PropertiesForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
