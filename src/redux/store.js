import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: {
      items: [],
    },
    filters: {
      name: '',
    },
  },
});
