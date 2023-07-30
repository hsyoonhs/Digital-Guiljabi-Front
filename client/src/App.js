import "./styles/App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Detail, Home, My, SearchInfo, Admin } from "./pages";
import { UserLayout } from "./components/Layout/UserLayout";
import { AdminLayout } from "./components/Layout/AdminLayout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path="detailInfo" element={<Detail />} />
                    <Route path="my" element={<My />} />
                    <Route path="search" element={<SearchInfo />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />} >
                    <Route index element={<Admin />} />
                    <Route path="*" element={<Admin />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
