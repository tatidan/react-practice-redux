import { addUserApi } from "../../services/users/UsersApi";
import { addUser, setError, setLoader } from "./usersActions";

export const addUserOperation = (user) => async (dispatch, getState) => {
  try {
    dispatch(setLoader());
    const res = await addUserApi(user);
    dispatch(addUser({ ...user, id: res.name }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};
