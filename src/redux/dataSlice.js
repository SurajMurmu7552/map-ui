import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: null,
  },
  reducers: {
    addData: (state, { payload }) => {
      if (payload) {
        state.value = data.filter((region) => payload === region.country);
      }
    },
  },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
