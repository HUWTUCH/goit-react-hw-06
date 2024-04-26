import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid/non-secure";

const initialState = {
    items: [
        {id: nanoid(), name: "Rosie Simpson", number: 459-12-56},
        {id: nanoid(), name: "Hermione Kline", number: 443-89-12},
        {id: nanoid(), name: "Eden Clements", number: 645-17-79},
        {id: nanoid(), name: "Annie Copeland", number: 227-91-26}
    ]
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.items.push({
                id: nanoid(),
                ...action.payload
            });
        },
        deleteContact: (state, action) => {
            const index = state.items.findIndex(contact => contact.id === action.payload);
            if (index >= 0) {
                state.items.splice(index, 1);
            }
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts?.items || [];

export default contactsSlice.reducer;

