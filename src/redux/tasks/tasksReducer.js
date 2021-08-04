//================TooKit=========================
import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask } from "../tasks/tasksActions"

const initialState = {
    items: [],
    filter: ""  
}

const tasksReducer = createReducer(initialState, {
  [addTask]: (state, action) => ({
    ...state,
    items: [...state.items, action.payload]
  }),
  [deleteTask]: (state, action) => ({
    ...state,
    items: state.items.filter(item => item.id !== action.payload)
  }),
});

export default tasksReducer;

//==============REDUX=======================

// import { ADD_TASK, DELETE_TASK } from "../tasks/tasksActions"

// const initialState = {
//     items: [],
//     filter: ""  
// }

// const tasksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...state,
//         items: [...state.items, action.payload]
//       }

//     case DELETE_TASK:
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload)
//       }
    
//     default:
//    return state
//   }
// }

// export default tasksReducer;