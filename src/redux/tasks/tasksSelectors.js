export const tasksSelector = (state) => {
  return state.tasks.items;
};
export const isLoadingSelector = (state) => {
  return state.tasks.isLoading;
};

export const errorSelector = (state) => {
  return state.tasks.error;
};
