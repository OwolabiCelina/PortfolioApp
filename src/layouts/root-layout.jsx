import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return ( 

        <div className="">
            <Navbar />

            <div className=" ">
                <Outlet />
            </div>
        </div>
     );
}
 
export default RootLayout;