import axios from "axios";

// axios.defaults.BASE_URL = "https://shop-49287-default-rtdb.firebaseio.com";
const BASE_URL = "https://shop-49287-default-rtdb.firebaseio.com";

export const getTasksApi = async () => {
  try {
    const response = await axios.get(BASE_URL + "/tasks.json");
    const result = Object.keys(response.data).map((item) => ({
      id: item,
      ...response.data[item],
    }));
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTaskApi = async (task) => {
  try {
    const response = await axios.post(BASE_URL + "/tasks.json", task);
    if (response.data) {
      return { id: response.data.name, ...task };
    }
    return [];
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTaskApi = async (id) => {
  try {
    await axios.delete(BASE_URL + `/tasks/${id}.json`);
  } catch (error) {
    throw new Error(error);
  }
};
