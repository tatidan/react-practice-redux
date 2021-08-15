import axios from "axios";
const API_KEY = "AIzaSyD23Pe4JSOHii1vSfmt2YtHT8j6WqUNo8g";
const regURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[${API_KEY}]`;
const login_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
const BASE_URL = "https://shop-49287-default-rtdb.firebaseio.com";

export const register = async (user) => {
  try {
    const response = await axios.post(regURL, {
      ...user,
      returnSecureToken: true,
    });
    const addUserToDB = await axios.post(BASE_URL + "/users.json", {
      email: user.email,
    });
    return { registerData: response.data, id: addUserToDB.data.name };
  } catch (error) {
    throw new Error(error);
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post(login_URL, {
      ...user,
      returnSecureToken: true,
    });
    return { loginData: response.data };
  } catch (error) {
    console.log(error);
  }
};
