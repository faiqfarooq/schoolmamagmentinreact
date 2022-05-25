import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    list:[
      {
        length: null,
        width: null
      }
    ]
   
  },
  reducers: {
    setUser: (state, action) => {
      console.log("action", action);
      state.length = action.payload?.length;
      state.width = action.payload?.width;
    }
  }
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state?.user;

export default userSlice.reducer;
