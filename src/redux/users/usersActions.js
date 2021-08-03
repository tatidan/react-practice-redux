const ADD_USER = "users/addUser";
const DELETE_USER = "users/deleteUser";

const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
})

const deleteUser = (id) => ({
    type: DELETE_USER,
  payload: id,
})

export { ADD_USER, DELETE_USER };
export { addUser, deleteUser };

const SET_FILTER = "users/setFilter";

const setFilter = (value) => ({
  type: SET_FILTER,
  payload: value
});

export { SET_FILTER };
export { setFilter };