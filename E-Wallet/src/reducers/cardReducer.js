import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardStack: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action) {
      state.cardStack.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
