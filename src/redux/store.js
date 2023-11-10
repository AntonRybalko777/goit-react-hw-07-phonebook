import { configureStore } from '@reduxjs/toolkit';
import { filtersListReducer } from './FiltersSlice';
import { contactsReducer } from './ContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filtersList: filtersListReducer,
  },
});
