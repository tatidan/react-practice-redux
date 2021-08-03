import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;



// ====================================
// const reducer = (state={}) => state;
// const store = createStore(reducer);

// const initialState = {
//   tasks: {
//     items: [],
//     filter: ""
//   },
//   users: {
//     items: [],
//     filter: ""
//   }
// }

// const reducer = (state = initialState) => {
//   return state;
// }
