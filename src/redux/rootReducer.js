import { combineReducers } from 'redux';
import tasksReducer from './tasks/tasksReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer
})

export default rootReducer;