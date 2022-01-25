import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
// Action types
const FILTER = "filter";
const ADD_CONTACT = "contacts/add";
const DELETE_CONTACT = "contacts/delete";

// Action creators
export function changeFilter(value) {
  return {
    type: FILTER,
    payload: value,
  };
}
export function addContact(value) {
  return {
    type: ADD_CONTACT,
    payload: value,
  };
}
export function deleteContact(value) {
  return {
    type: DELETE_CONTACT,
    payload: value,
  };
}

// Reducer
function filter(state = "", action) {
  switch (action.type) {
    case FILTER:
      return action.payload;

    default:
      return state;
  }
}
function contacts(state = [], action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return [...state.filter((element) => element.id !== action.payload)];

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  filter: filter,
  contacts: contacts,
});

// Store
export const store = createStore(rootReducer, devToolsEnhancer());
