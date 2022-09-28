import { DECREMENT, INCREMENET } from "./actionTypes";

export const cartIncrement = (product) => {
    return {
        type: INCREMENET,
        payload: {
            ...product,
        },
    };
};

export const cartDecrement = (product) => {
    return {
        type: DECREMENT,
        payload: {
            ...product,
        },
    };
};
