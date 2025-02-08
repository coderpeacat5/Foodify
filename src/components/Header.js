import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../utils/logo.png"; 

const Header= () => {

    const [btnName, setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between items-center shadow-md mb-2 bg-[#FFFBC1]">
        <div className="logo-container">
            <img className="w-28" src={logo}/>
        </div>
        <div className="nav-container">
            <ul className="flex  m-4">
                <li className="px-4">Online Status:{onlineStatus? "🟢" : "🔴"}</li>
                <li className="px-4">
                    <Link to="/">Home</Link></li>
                <li className="px-4">
                    <Link to="about">About Us</Link></li>
                <li className="px-4">
                    <Link to="/contact">Contact Us</Link> </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li >
                <li className="px-4">Cart</li>
                <button className="px-4" onClick={() => {
                    btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;