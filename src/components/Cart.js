import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="p-2 m-3 bg-[#E9EED9]">
            <h1 className="font-bold text-2xl text-center m-3">Cart</h1>
            <div className="flex flex-col justify-center items-center">
            <ItemList items={cartItems} className="bg-[#E9EED9]"/>
            {cartItems.length === 0 ? (
                <h1 className="text-center m-32 text-lg font-medium ">Oops! Looks like your cart is empty</h1>
            ) : (
                <>
                    <button
                        className="bg-[#47533b] text-white p-2 m-5 cursor-pointer rounded-lg shadow-lg"
                        onClick={handleClearCart}>
                        Clear Cart
                    </button>
                </>
            )}
            </div>
        </div>
    );
};

export default Cart;
