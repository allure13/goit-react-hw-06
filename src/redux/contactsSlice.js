import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
});

const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;
