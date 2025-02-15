import { MENU_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="border-b border-gray-400 p-2 m-1 flex justify-between"
                >
                    
                    <div className="w-9/12">
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold">
                                {item.card.info.name}
                            </span>
                            <span className="font-semibold">
                                Rs.{" "}
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-[#646464]">{item.card.info.description}</p>
                    </div>

                    <div className="relative w-36 h-32">
                        <img
                            src={MENU_URL + item.card.info.imageId}
                            className="w-full h-full rounded-md shadow-lg "
                            
                        />
                        <button className="absolute w-20 mb-1 -bottom-1.5 left-1/2 transform -translate-x-1/2 bg-white text-[#1ba672] py-1.5 px-3 shadow-md rounded-md font-medium hover:bg-gray-100 cursor-pointer">
                            ADD 
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
