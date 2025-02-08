import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus()

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6397&lng=77.0776722&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )

        const json = await data.json();

        console.log(json);

        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }



    if (onlineStatus === false) return <h1>Oops!!Looks like u r offline, please check ur internet connection :)</h1>

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="p-8 bg-[#E9EED9]">
            <div className="px-3 flex justify-between items-center mb-4">
                <div className="flex ">
                    <div className="border border-gray-400 p-0 mr-8 rounded-sm bg-[#FBF6E9]">
                        <input type="text" placeholder="Search.."  
                        className=" px-2"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}></input>
                        <button className="cursor-pointer p-1 bg-[]" 
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                            setFilteredRestaurant(filteredRestaurant)
                        }}>🔍</button>
                    </div>
                    <button className="filter-btn rounded-sm px-2 bg-[#B2C9AD] hover:bg-[#9db099] cursor-pointer"
                        onClick={() => {
                            const filteredRes = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.3
                            )
                            setFilteredRestaurant(filteredRes)
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="text-md">Online Status : {onlineStatus ? "🟢" : "🔴"}</div>
            </div>
            <div className="flex flex-wrap ">

                {filteredRestaurant.map((restaurant) => (
                    <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} style={{ textDecoration: "none", color: "black" }}><RestaurantCard resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    )

}

export default Body;