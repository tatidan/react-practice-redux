// ===============toolKit=====================
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

persistStore(store);

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
