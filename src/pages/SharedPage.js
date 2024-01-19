import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function SharedPage() {
    return(
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default SharedPage;