import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    // const { loggedInUser } = useContext(UserContext)
    // console.log(data)

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    return (
        <div className="flex justify-between items-center shadow-md shadow-[#91AC8F] mb-1 bg-[#889E73] ">
            <div className="logo-container">
                <img className="w-28" src={logo} />
            </div>
            <div className="nav-container">
                <ul className="flex m-4">

                    <li className=" px-4 hover:font-bold cursor-pointer">
                        <Link to="/">Home</Link></li>
                    <li className=" px-4 hover:font-bold cursor-pointer">
                        <Link to="about">About Us</Link></li>
                    <li className=" px-4 hover:font-bold cursor-pointer">
                        <Link to="/contact">Contact Us</Link> </li>
                    {/* <li className=" px-4 hover:font-bold cursor-pointer">
                        <Link to="/grocery">Grocery</Link>
                    </li > */}
                    <li className=" px-4 hover:font-bold cursor-pointer">
                        <Link to="/cart">Cart
                            <span className=" bg-gray-500 text-white text-xs font-bold ml-1 px-2 py-0.5 rounded-full">
                                {cartItems.length}
                            </span>
                        </Link>
                    </li>
                    <button className=" px-4 hover:font-bold cursor-pointer" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                    {/* <li className="pl-4 hover:font-bold cursor-pointer">{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;