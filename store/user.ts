import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  email?: string;
}

const initialState: userState = {
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { updateEmail } = userSlice.actions;

export default userSlice.reducer;
