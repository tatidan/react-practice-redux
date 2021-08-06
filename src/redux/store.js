// ===============toolKit=====================
import {
  // applyMiddleware,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import axios from "axios";

const BASE_URL = "https://shop-49287-default-rtdb.firebaseio.com";

const customMiddleware = (store) => (next) => (action) => {
  console.log(action);

  if (action.type === "users/addUser") {
    axios.post(BASE_URL + "/popular.json", {
      id: action.payload.id,
      // data: window.navigator.useragent
    });
  }

  return next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(customMiddleware),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

persistStore(store);

export default store;

// const middleWares = [thunk];
// const enhancer = applyMiddleware(...middlewares);
// const store = createStore(rootReducer, composeWithDevTools(enhancer));

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
