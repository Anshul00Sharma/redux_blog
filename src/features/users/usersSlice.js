import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "rahul" },
  { id: "1", name: "modi" },
  { id: "2", name: "Anshul Sharma" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
