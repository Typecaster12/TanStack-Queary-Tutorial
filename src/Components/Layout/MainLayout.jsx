import { Outlet } from "react-router-dom"
import Footer from "../UI/Footer";
import Header from "../UI/Header";
const MainLayout = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;