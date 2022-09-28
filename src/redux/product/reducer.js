import { DECREMENT, INCREMENET } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENET:
            return state.map((product) => {
                if (product.id !== action.payload) {
                    return product;
                }
                return {
                    ...product,
                    available_qty: product.available_qty + 1,
                };
            });

        case DECREMENT:
            return state.map((product) => {
                if (product.id !== action.payload) {
                    return product;
                }

                return {
                    ...product,
                    available_qty: product.available_qty - 1,
                };
            });
            
        default:
            return state;
    }
};

export default reducer;
