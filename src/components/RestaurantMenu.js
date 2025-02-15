import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage, areaName, avgRating, totalRatingsString, sla } = resInfo?.cards?.[2]?.card?.card?.info;
    // console.log(resInfo)

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories)

    return (
        <div className="p-2 flex flex-col items-center bg-[#E9EED9]">
            <div className=" w-2/4 ">
                <h1 className="font-bold text-2xl text-center mb-7">{name} </h1>
                <div className="shadow-2xl border border-gray-300 p-5 rounded-lg mb-8 bg-[#D9DFC6]">
                    <p className="mb-1 ">🍴 {cuisines.join(", ")} <span className="ml-10">🛒 {costForTwoMessage}</span> <span className="ml-10">⭐ {avgRating} ({totalRatingsString})</span></p>
                    <p className="mb-1">📍 {areaName} <span className="ml-15">⏱ {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</span></p>
                </div>
                <h2 className="font-bold text-xl text-center m-3">Menu</h2>
            </div>

            {/* Categories accordion */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex= {() => setShowIndex(index)} />
                ))}
        </div>
   ) 
}

export default RestaurantMenu;