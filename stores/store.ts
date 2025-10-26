import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cardSlice";
import userSlice from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
