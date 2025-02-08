import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {resData}= props;
    const {cloudinaryImageId, name,cuisines,costForTwo, avgRating } = resData?.info;
    const {deliveryTime}= resData?.info?.sla;
    return (
        <div 
        className="h-[460px] w-[220px] my-4 mx-2 p-3 bg-[#B2C9AD] shadow-md hover:shadow-xl rounded-sm">
            <img 
            src={CDN_URL+cloudinaryImageId}
            alt="res-logo"
            className="h-[230px] w-64 mb-2 rounded-sm"></img>
            <h3 className="font-bold py-2 text-md h-14 mt-1 ">{name}</h3>
            <h4 className="h-12 mb-1">🍴 {cuisines.join(", ")}</h4>
            <h4 className="mb-1">⭐ {avgRating} </h4>
            <h4  className="mb-1">🛒 {costForTwo}</h4>
            <h4 className="mb-1">⏱ {deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;