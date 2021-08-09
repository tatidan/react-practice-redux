import { createReducer } from "@reduxjs/toolkit";
import { registerUser } from "./authAction";

export const authReducer = createReducer(
  {},
  {
    [registerUser]: (_, { payload }) => payload,
  }
);
