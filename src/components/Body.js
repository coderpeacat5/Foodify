import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

const Body= () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([])

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData= async () => {
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            )

        const json= await data.json();

        console.log(json);

        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return (
        <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                filteredRes= listOfRestaurants.filter(
                    (res) => res.info.avgRating>4
                )
                setListOfRestaurant(filteredRes)
            }}>
                Top Rated Restaurants
                </button>
        </div>
        <div className="res-container">
            
            {listOfRestaurants.map((restaurant, index)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
        </div>
    </div>
    )
    
}

export default Body;