import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../../components/cart/CartItem";

interface CartItem {
  id: number | string;
  title: string;
  quantity: number;
  price: number;
  sum: number;
  imageURL: string;
}

// const dummy = {
//   id: 1,
//   price: 1199,
//   title: "iPhone 16 Pro Max",
//   imageURL:
//     "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
// };
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    //add items to cart
    addItemToCart: (state, actions) => {
      const isItemExist = state.items.find((e) => e.id === actions.payload.id);
      if (isItemExist) {
        isItemExist.quantity += 1;
        isItemExist.sum += actions.payload.price;
        console.log("item already exist");
        return;
      }
      state.items.push({
        ...actions.payload,
        quantity: 1,
        sum: actions.payload.price,
      });
    },
    //remove items from cart
    removeItemsFromCart: (state, actions) => {
      const existingItem = state.items.find((e) => e.id === actions.payload.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.sum -= actions.payload.price;
        } else {
          state.items = state.items.filter((e) => e.id !== existingItem.id);
        }
      }
    },
    //remove product from cart
    deleteItem: (state, action) => {
      const existingItem = state.items.find((e) => e.id === action.payload.id);
      if (existingItem) {
        state.items = state.items.filter((e) => e.id !== existingItem.id);
      }
    },
    //empty cart
    emptyCard: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemsFromCart, deleteItem } =
  cartSlice.actions;
export default cartSlice.reducer;

export const cartItem = CartItem;
