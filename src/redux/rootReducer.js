import { combineReducers } from "@reduxjs/toolkit";
// import { combineReducers } from 'redux';
import tasksReducer from "./tasks/tasksReducer";
import usersReducer from "./users/usersReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authReducer";

const usersPersistConfig = {
  key: "users",
  storage: storage,
  whitelist: ["items", "filter"],
  // blacklist: ['error'],
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  users: persistReducer(usersPersistConfig, usersReducer),
  auth: authReducer,
});

export default rootReducer;
