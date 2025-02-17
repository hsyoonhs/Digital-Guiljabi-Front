import "./styles/App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Detail, Home, My, SearchInfo } from "./pages";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detailInfo" element={<Detail />} />
                <Route path="/my" element={<My />} />
                <Route path="/search" element={<SearchInfo />} />
            </Routes>
        </Router>
    );
}

export default App;
