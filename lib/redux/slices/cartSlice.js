import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("action for add to cart : ", action, " and state : ", state);
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].amount += 1;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decrease: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0) {
        if (state.items[itemIndex].amount > 1) {
          state.items[itemIndex].amount -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    getCartTotal: (state) => {
      const { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseFloat(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
  },
});

export const { addToCart, removeFromCart, decrease, clearCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
