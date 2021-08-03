import { createStore } from "redux";
import shopTotalReducer from "./shopTotalReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const cartStore = createStore(shopTotalReducer, composeWithDevTools());
export default cartStore;