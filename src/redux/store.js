import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
};

const rootReducer = combineReducers({
    contacts: persistReducer(contactsPersistConfig, contactsSlice.reducer),
    filters: filtersSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store)
