import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PropertiesForm from "./components/PropertiesForm/PropertiesForm";
import Add from "./pages/Add";
import All from "./pages/All";
import Properties from "./pages/Properties";

const App = () => {
  return (
    <Router>
      <div className="app_container">
        <NavBar />
        <PropertiesForm />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add" element={<Add />} />
          <Route path="/all" element={<All />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
