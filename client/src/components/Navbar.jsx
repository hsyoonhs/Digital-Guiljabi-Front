import "../styles/Navbar.css";

import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <h1>Logo</h1>
            </div>
            <div className="navbar__links">
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/about")}>About</button>
                <button onClick={() => navigate("/contact")}>Contact</button>
                <button onClick={() => navigate("/detailInfo")}>Detail</button>
                <button onClick={() => navigate("/my")}>My</button>
                <button onClick={() => navigate("/search")}>Search</button>
            </div>
        </div>
    );
};
