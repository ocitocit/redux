// Importing the configureStore function and the cartReducer from respective modules in our project.
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

// Creating a Redux store with a 'cart' reducer, which would contain the state for the cart feature of our app.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
