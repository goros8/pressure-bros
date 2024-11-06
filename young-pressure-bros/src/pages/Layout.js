import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../css/Layout.css";
const Layout = () => {
    return(
        <>
        <Header/>
        <nav>
            
            <ul id="nav-items">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/reviews">Reviews</Link>
            </li>
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    );
};
export default Layout;