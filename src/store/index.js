import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import notificationReducer from "./notification-slice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
  },
});

export default store;
