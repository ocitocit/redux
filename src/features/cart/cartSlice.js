// Importing createSlice from "@reduxjs/toolkit" library
import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

// Declaring initialState object with some properties
const initialState = {
  cartItems: cartItems,
  amount: 5,
  total: 0,
  isLoading: true,
};

// Creating a new slice of state for cart items using createSlice function
// from redux toolkit by passing name of the slice and initial state object.
const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// Exporting the reducer part of the slice so that it can be included in
// the store in combination with other reducers.
export default cartSlice.reducer;

// console.log(cartSlice) -> This line is commented out, it logs the created slice
// object to the console.
