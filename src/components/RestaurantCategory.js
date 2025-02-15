import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div className="rounded-sm w-7/12 mx-auto my-4 pl-2 bg-[#f2f6e2] shadow-lg">
            <div className="flex justify-between items-center mt-3 mb-6 mx-2 cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg ">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>

            {showItems && <ItemList items={data.itemCards} />}
        </div>

    )
}

export default RestaurantCategory;