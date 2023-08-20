import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </>
    )
}