import { combineReducers } from "@reduxjs/toolkit";
import { items } from "./items/items-reducers";
import { filter } from "./contacts/filter/filter-reducers";

export const contacts = combineReducers({
  items,
  filter,
});

export const filterContacts = (query, contacts) =>
  contacts.filter((element) =>
    element.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );