import { Routes, Route } from "react-router-dom"
import { Home, WaitingPost, ReportPost, EditPost, WaitDetail } from "./pages"

export const Admin = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service">
                <Route path="wait" element={<WaitingPost />} />
                <Route path="report" element={<ReportPost />} />
                <Route path="edit" element={<EditPost />} />
                <Route path="wait/:id" element={<WaitDetail />} />
            </Route>
        </Routes>
    )
}
