import { ActionTypes } from "../constants/action-types";
const intialState = {
    products: [
        {
            id: 1,
            title: "",
            category: "programmer",
        },
        {
            id: 1,
            title: "",
            category: "programmer",
        }
    ],
};

export const productsReducer = (state=intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state;
    }
};

