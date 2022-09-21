import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalItems: 0,
  shoppingList: [],
  changed: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalItems = action.payload.totalItems;
      state.shoppingList = action.payload.shoppingList;
    },

    addItem(state, action) {
      const itemIndex = state.shoppingList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1)
        state.shoppingList.push({ ...action.payload, quantity: 1 });
      else state.shoppingList[itemIndex].quantity++;
      state.totalItems++;
      state.changed = true;
    },
    increaseQuantity(state, action) {
      const itemIndex = state.shoppingList.findIndex(
        (item) => item.id === action.payload
      );
      state.shoppingList[itemIndex].quantity++;
      state.totalItems++;
      state.changed = true;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.shoppingList.findIndex(
        (item) => item.id === action.payload
      );
      state.shoppingList[itemIndex].quantity--;
      if (state.shoppingList[itemIndex].quantity === 0)
        state.shoppingList.splice(itemIndex, 1);
      state.totalItems--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
