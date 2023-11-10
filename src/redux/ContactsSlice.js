import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  // deleteContact: (state, action) => {
  //   state.items = state.items.filter(
  //     contact => contact.id !== action.payload
  //   );
  // },
  // addContact: (state, action) => {
  //   state.items = [...state.items, action.payload];
  // },
  // },
});

export const contactsReducer = ContactsSlice.reducer;

export const { deleteContact, addContact } = ContactsSlice.actions;
