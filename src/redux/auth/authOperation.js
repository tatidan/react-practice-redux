import { register } from "../../services/AuthApi";
import { registerUser } from "./authAction";

export const registerUserOperation = (user) => async (dispatch) => {
  try {
    const response = await register(user);
    dispatch(registerUser(response));
  } catch (error) {
    throw new Error(error);
  }
};
