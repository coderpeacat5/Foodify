import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage, areaName, totalRatingsString, sla } = resInfo?.cards?.[2]?.card?.card?.info;
    console.log(resInfo)

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)

    return (
        <div className="p-2 flex flex-col items-center bg-[#E9EED9]">
            <div className=" w-2/4 ">
                <h1 className="font-bold text-2xl text-center mb-7">{name} </h1>
                <div className="shadow-2xl border border-gray-300 p-5 rounded-lg mb-8 bg-[#D9DFC6]">
                    <p className="mb-1">🍴 {cuisines.join(", ")} <span className="ml-10">🛒 {costForTwoMessage}</span> <span className="ml-10">⭐ {totalRatingsString}</span></p>
                    <p className="mb-1">📍 {areaName} <span className="ml-15">⏱ {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</span></p>

                </div>

                <h2 className="font-bold text-xl text-center mt-3">Menu</h2>
            </div>
            {itemCards.map((item) => (
                <div className="flex flex-start justify-between">
                    <ul key={item.card.info.id} className="flex flex-start justify-between p-5 border-b border-b-gray-400">
                        <li className="m-3"><span className="font-semibold">{item.card.info.name}</span>
                        <p className="font-semibold">Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                        <p className="text-[#646464]">{item.card.info.description}</p></li>
                        <img src={MENU_URL + item.card.info.imageId} className="w-[110px] h-[110px]"></img>

                    </ul>
                </div>
            ))}
        </div>
    )
}

export default RestaurantMenu;