import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productStatus from "./middlewares/productStatus";
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(productStatus))
);

export default store;
