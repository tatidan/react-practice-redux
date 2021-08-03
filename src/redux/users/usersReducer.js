import { combineReducers } from "redux";
import { ADD_USER, DELETE_USER, SET_FILTER } from "./usersActions";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
 
    case DELETE_USER:
      return state.filter(item => item.id !== action.payload);
    
    // case ADD_TASK:
    //   return [...state, {id: "adfag", name: "Test"}];
    
    default:
      return state;
  }
}

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    
    
    default:
      return state;
  }
}

const usersReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer
})

export default usersReducer;