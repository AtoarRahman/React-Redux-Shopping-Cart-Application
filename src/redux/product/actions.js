import { DECREMENT, INCREMENET } from "./actionTypes";

export const productIncrement = (productId) => {
    return {
        type: INCREMENET,
        payload: productId,
    };
};

export const productDecrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId,
    };
};
