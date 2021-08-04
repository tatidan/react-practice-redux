// ===============toolKit=====================
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
reducer: rootReducer,
});

export default store;

// ===============REDUX=====================
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// ====================================
// draft:
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
