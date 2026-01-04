import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Landing() {
    return ( 
        <div className="w-full mt-24">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
     );
}

export default Landing;