/* eslint-disable no-self-assign */
import { DECREMENT, INCREMENET } from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENET:
            const cartProduct = state.map((product)=>({
                ...product,
            }));

            const itemIndex = cartProduct.findIndex((product)=> product.id === action.payload.id);

            if(itemIndex > -1){
                cartProduct[itemIndex].total_qty = cartProduct[itemIndex].total_qty + 1;
                cartProduct[itemIndex].total_price = cartProduct[itemIndex].total_price + action.payload.price;

                return cartProduct;

            }else{
                return [
                    ...state,
                    {
                        ...action.payload,
                        total_qty:1,
                        total_price: action.payload.price,
                    }
                ]
            }


        case DECREMENT:
            const cartProducts = state.map((product)=>({
                ...product,
            }));

            const itemIndexNo = cartProducts.findIndex((product)=> product.id === action.payload.id);

            if(cartProducts[itemIndexNo].total_qty === 1){
                return state.filter((product) => product.id !== action.payload.id);
                
            } else if(itemIndexNo > -1){
                cartProducts[itemIndexNo].total_qty = cartProducts[itemIndexNo].total_qty - 1;
                cartProducts[itemIndexNo].total_price = cartProducts[itemIndexNo].total_price - action.payload.price;

                return cartProducts;

            }else{
                return [...state ]
            }
            

        default:
            return state;
    }
};

export default reducer;
