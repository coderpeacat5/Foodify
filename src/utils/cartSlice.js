import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        // mutating state here
        addItem : (state, action) => {

            

        // Vanilla Redux
        // const newState = [...state]
        // newState.items.push(action.payload)
        // return newState

            // Redux Toolkit
            state.items.push(action.payload)
        },
        removeItem : (state, action) => {
            state.items.pop()
        },
        clearCart : (state) => {
            // state.items.length = 0;

            return {items : []};
        }
    }
})

export default cartSlice.reducer;

export const {addItem , removeItem , clearCart} = cartSlice.actions;