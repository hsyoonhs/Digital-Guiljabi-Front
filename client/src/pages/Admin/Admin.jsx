import { Routes, Route } from "react-router-dom"
import { Home } from "./pages"

import { Sidebar } from "./Components/Sidebar"

export const Admin = () => {
    return (
        <div>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}
