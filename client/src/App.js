import "./styles/App.css";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import { Detail, Home, My, SearchInfo } from "./pages";
import { Navbar } from "./components/Navbar";

function App() {
    useEffect(() => {
        const api = process.env.REACT_APP_API_URL;
        console.log(api);
        axios
            .post(`${api}/api/login`, {
                uid: "commeci",
            })
            .then((res) => {
                if (res.data.token)
                    localStorage.setItem("token", res.data.token);
            })
            .catch((err) => console.log("로그인 오류", err));
    }, []);
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
