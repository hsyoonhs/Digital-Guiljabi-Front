import { Outlet } from "react-router-dom"
import { Sidebar } from "../Sidebar"


export const AdminLayout = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}