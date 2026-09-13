import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "@micro-store/types";
interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            console.log(state,action)
            // const existingItem = state.items.find(
            //     item => item.id === action.payload.id
            // );
            // if (existingItem) {
            //     existingItem.quantity += 1;
            // } else {
            //     state.items.push({
            //         ...action.payload,
            //         quantity: 1,
            //     });
            // }
        },

        increaseToCart: (state, action: PayloadAction<string | number>) => {
            const product = state.items.find((item) => item.id == action.payload);
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseToCart: (state, action: PayloadAction<string | number>) => {
            const product = state.items.find((item) => item.id == action.payload);
            if (product && product.quantity >= 1) {
                product.quantity -= 1;
            }
        },
        removeFromCart: (state, action: PayloadAction<string | number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, increaseToCart, decreaseToCart, clearCart, } = cartSlice.actions;
export default cartSlice.reducer;