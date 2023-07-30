import { Routes, Route } from "react-router-dom"
import { Home } from "./pages"

export const Admin = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div>Admin</div>} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    )
}
