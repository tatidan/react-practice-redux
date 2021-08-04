//================TooKit=========================
import { createAction } from "@reduxjs/toolkit";
//import { v4 as uuidv4 } from "uuid";

const addTask = createAction("tasks/addTask");
const deleteTask = createAction("tasks/deleteTask");

// для модификации того, что приходит:
// const addTask = createAction("tasks/addTask", (newTask) => {
//   return {
//     payload: {...newTask, newID: uuidv4()}
//   }
// })

export { addTask, deleteTask };


//================REDUX=========================
// const ADD_TASK = "tasks/addTask";
// const DELETE_TASK = "tasks/deleteTask";

// const addTask = (newTask) => ({
//   type: ADD_TASK, payload: newTask
// })
// // const addTask = (paylod) => ({ type: ADD_TASK, payload })

// const deleteTask = (id) => ({
//   type: DELETE_TASK, payload: id
// })

// export { addTask, deleteTask };
// export { ADD_TASK, DELETE_TASK };
  
//=========================================

// это action-creators:

// const addTask = (newTask) => ({
//   type: "addTask", payload: newTask
// })

// const deleteTask = (id) => ({
//   type: "deleteTask", payload: id
// })

// это actions:

// const action1 = {
//   type: "addTask",
//   payload: { name: "task1", id: "1"},
// }

// const action2 = {
//   type: "deleteTask",
//   payload: "1",
// }