import { createSlice } from '@reduxjs/toolkit';
import type { PairDaysInitialStateType } from '@xxx/types/pairDaysType';
import { getPairDaysThunk, changeDayThunk } from '../actions/pairDaysActions';

const initialState: PairDaysInitialStateType = {
  pairDays: [],
};

const pairDaysSlice = createSlice({
  name: 'pairDays',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPairDaysThunk.fulfilled, (state, action) => {
      state.pairDays = action.payload;
    });
    builder.addCase(changeDayThunk.fulfilled, (state, action) => {
      const day = state.pairDays.find((el) => el.id === action.payload.dayId);
      if (day) {
        day.dayType = action.payload.dayType;
      }
    });
  },
});

export default pairDaysSlice.reducer;
