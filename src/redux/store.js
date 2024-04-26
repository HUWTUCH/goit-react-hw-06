import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";

const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    filters: filtersSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
