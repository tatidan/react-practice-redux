import axios from "axios";
const API_KEY = "";

const regKEY = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[${API_KEY}]`;

export const register = async (user) => {
  try {
    const response = await axios.post(regKEY, {
      ...user,
      returnSecutreToken: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
