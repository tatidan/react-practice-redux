//=================ToolKit====================
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";


import { addUser, deleteUser, setFilter, setError, resetError } from "./usersActions";


const itemsReducer = createReducer([], {
  [addUser]: (state, action) => [...state, action.payload],
  [deleteUser]: (state, action) => state.filter(item => item.id !== action.payload),
});

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

const errorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const usersReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
});

export default usersReducer;


//=================REDUX====================
// import { combineReducers } from "redux";
// import { ADD_USER, DELETE_USER, SET_FILTER } from "./usersActions";

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_USER:
//       return [...state, action.payload];
//     case DELETE_USER:
//       return state.filter(item => item.id !== action.payload);
//     // case ADD_TASK:
//     //   return [...state, {id: "adfag", name: "Test"}];
//     default:
//       return state;
//   }
// }

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;
//
//     default:
//       return state;
//   }
// }

// const usersReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer
// })

// export default usersReducer;