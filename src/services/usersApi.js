import axios from "axios";

// axios.defaults.BASE_URL = "https://shop-49287-default-rtdb.firebaseio.com";
const BASE_URL = "https://shop-49287-default-rtdb.firebaseio.com";

export const getUsersApi = async () => {
  try {
    const response = await axios.get(BASE_URL + "/users.json");
    const result = Object.keys(response.data).map((item) => ({
      id: item,
      ...response.data[item],
    }));
    return result;
  } catch (error) {
    throw new Error(error.response.status);
  }
};

export const addUserApi = async (user) => {
  try {
    const response = await axios.post(BASE_URL + "/users.json", user);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUserApi = async (id) => {
  try {
    await axios.delete(BASE_URL + `/users/${id}.json`);
  } catch (error) {
    throw new Error(error);
  }
};
