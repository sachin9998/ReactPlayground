import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  birds: [],
};

const birdSlice = createSlice({
  name: "birds",
  initialState,
  reducers: {
    addBird: (state, action) => {
      const newBird = {
        name: action.payload,
        likes: 0,
      };
      state.birds.push(newBird);
    },
    likeBird: (state, action) => {
      const bird = state.birds.find((bird) => bird.name === action.payload);

      if (bird) {
        bird.likes += 1;
      }
    },
  },
});

export const { addBird, likeBird } = birdSlice.actions;
export default birdSlice.reducer;
