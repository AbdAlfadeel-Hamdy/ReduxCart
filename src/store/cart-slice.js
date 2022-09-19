import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalItems: 0,
  shoppingList: [],
  cartIsOpened: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsOpened = !state.cartIsOpened;
    },
    addItem(state, action) {
      const itemIndex = state.shoppingList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1)
        state.shoppingList.push({ ...action.payload, quantity: 1 });
      else state.shoppingList[itemIndex].quantity++;
      state.totalItems++;
    },
    increaseQuantity(state, action) {
      const itemIndex = state.shoppingList.findIndex(
        (item) => item.id === action.payload
      );
      state.shoppingList[itemIndex].quantity++;
      state.totalItems++;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.shoppingList.findIndex(
        (item) => item.id === action.payload
      );
      state.shoppingList[itemIndex].quantity--;
      if (state.shoppingList[itemIndex].quantity === 0)
        state.shoppingList.splice(itemIndex, 1);
      state.totalItems--;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
