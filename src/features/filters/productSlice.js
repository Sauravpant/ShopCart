import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  items: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    sortByPriceLowToHigh: (state) => {
      state.items = [...state.items].sort((a, b) => a.price - b.price); //price low to high

    },
    sortByPriceHighToLow: (state) => {
      state.items = [...state.items].sort((a, b) => b.price - a.price); // price high to low 


    },
    sortByRating: (state) => {
      state.items = [...state.items].sort((a, b) => b.rating - a.rating); // sorting high to low

    },
    sortByTitle: (state) => {
      state.items = [...state.items].sort((a, b) => a.title.localeCompare(b.title)); // sort by title(A-Z)
    }
  }
});

export const { setProducts, sortByPriceLowToHigh, sortByPriceHighToLow, sortByRating, sortByTitle } = productSlice.actions;
export default productSlice.reducer;