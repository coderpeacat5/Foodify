import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body= () => {
    return (
        <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                listOfRestaurants= listOfRestaurants.filter(
                    (res) => res.info.avgRating>4
                )
            }}>
                Top Rated Restaurants
                </button>
        </div>
        <div className="res-container">
            
            {resList.map((restaurant, index)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
        </div>
    </div>
    )
    
}

export default Body;