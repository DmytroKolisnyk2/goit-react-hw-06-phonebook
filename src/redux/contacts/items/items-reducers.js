import { addContact, deleteContact } from "./items-actions";
import { createReducer } from "@reduxjs/toolkit";

export const items = createReducer([], {
  [addContact.type]: (state, { payload }) => [...state, payload],
  [deleteContact.type]: (state, { payload }) => [
    ...state.filter((element) => element.id !== payload),
  ],
});
