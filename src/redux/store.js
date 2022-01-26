import { configureStore } from "@reduxjs/toolkit";
import { contacts } from "./contacts/contacts-reducers";

export const store = configureStore({
  reducer: { contacts },
  devTools: process.env.NODE_ENV === "development",
});
