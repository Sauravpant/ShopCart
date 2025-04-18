import { createSlice } from "@reduxjs/toolkit"
const INITIAL_STATE = {
  items: [],//id,name,price,quantity
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else { state.items.push({ ...action.payload, quantity: 1 }); }


    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload.id);

    },
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
      else {
        state.items = state.items.filter((item) => item.id != action.payload.id);
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
