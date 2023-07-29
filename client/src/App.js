import "./styles/App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Detail, Home } from "./pages";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default App;
