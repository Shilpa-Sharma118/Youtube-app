import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./contants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      //we need to insert at the front of the array where as push adds at the end of array
      //state.messages.push(action.payload);

      //Removing extra elements if the number goes above 10
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      //if you want to add ad front
      //state.messages.unshift(action.payload)
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
