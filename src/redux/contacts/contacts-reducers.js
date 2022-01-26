import { combineReducers } from "@reduxjs/toolkit";
import { items } from "./items/items-reducers";
import { filter } from "./filter/filter-reducers";

export const contacts = combineReducers({
  items,
  filter,
});
