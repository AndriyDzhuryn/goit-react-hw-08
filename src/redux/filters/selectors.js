import { createSelector } from '@reduxjs/toolkit';

import { selectContacts } from '../contacts/selectors.js';

export const selectNameFilter = state => state.filters.filters.name;

export const selectFilterListContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filters.toLowerCase().trim()) ||
        contact.number.toLowerCase().includes(filters.toLowerCase().trim())
      );
    });
  }
);
