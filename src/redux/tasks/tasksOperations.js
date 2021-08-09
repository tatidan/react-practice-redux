import { addTaskApi } from "../../services/tasks/Tasks.Api";
import { setError, setLoader, getTasks, addTask } from "./tasksActions";

export const getTasksOperation = () => async (dispatch, getState) => {
  try {
    dispatch(setLoader());
    const tasks = await addTaskApi();
    dispatch(getTasks(tasks));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

export const addTaskOperation = (task) => async (dispatch, getState) => {
  try {
    dispatch(setLoader());
    const res = await addTaskApi(task);
    dispatch(addTask({ ...task, id: res.name }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};
