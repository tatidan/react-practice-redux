export const usersSelector = (state) => {
  return state.users.items;
};

export const isLoadingSelector = (state) => {
  return state.users.isLoading;
};

export const errorSelector = (state) => {
  return state.users.error;
};
