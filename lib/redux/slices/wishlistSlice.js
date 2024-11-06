import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartSlice";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const itemExists = state.items.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    });
  },
});

// Thunk for moving all wishlist items to the cart
export const moveAllToCart = () => (dispatch, getState) => {
  const { wishlist } = getState();
  wishlist.items.forEach((item) => dispatch(addToCart(item)));
  dispatch(clearWishlist());
};

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;