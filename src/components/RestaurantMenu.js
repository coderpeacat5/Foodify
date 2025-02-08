import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)

    return (
        <div className="menu">
            <div className="menu-title">
                <h1>{name} </h1>
                <p>{cuisines.join(", ")} </p>
                <span>{costForTwoMessage}</span>
                <h2>Menu</h2>
            </div>
            {itemCards.map((item) => (
                <div>
                    <ul key={item.card.info.id} className="menu-items">
                        <li>{item.card.info.name}<br></br>Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}<p>{item.card.info.description}</p></li>
                        <img src={MENU_URL + item.card.info.imageId} className="menu-img"></img>

                    </ul>
                </div>
            ))}
        </div>
    )
}

export default RestaurantMenu;