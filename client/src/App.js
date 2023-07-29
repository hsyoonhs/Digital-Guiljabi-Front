import "./styles/App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Request } from "./pages";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/request" element={<Request />} />
            </Routes>
        </Router>
    );
}

export default App;
