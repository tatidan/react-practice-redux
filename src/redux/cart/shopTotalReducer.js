import { combineReducers } from "redux";
import cartReducer from "../cart/cartReducer";
import productsReducer from "../products/productsReducer";

const shopTotalReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
})

export default shopTotalReducer;