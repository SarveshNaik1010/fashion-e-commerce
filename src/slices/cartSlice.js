import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // LOOK OF THE CATRT
    // {
    //   id: 1,
    //   title, desc, image...
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      console.log("sdonf");
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
