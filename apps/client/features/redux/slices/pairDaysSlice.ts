import { createSlice } from '@reduxjs/toolkit';
import type { PairDaysType, PairsData } from '@xxx/types/pairDaysType';
import {
  getPairDaysThunk,
  changeDayThunk,
  getGroupPairsThunk,
  generateGroupPairsThunk,
  refreshDayThunk,
} from '../actions/pairDaysActions';

const pairDaysSlice = createSlice({
  name: 'pairDays',
  initialState: {
    selectedGroup: null as string | null,
    pairDays: [] as PairDaysType[],
    groupPairs: [] as PairsData,
  },
  reducers: {
    setSelecdetGroup(state, action: { payload: string | null }) {
      state.selectedGroup = action.payload;
    },

    cleanPairDays(state) {
      state.selectedGroup = null;
      state.groupPairs = [];
    },
  },

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

    builder.addCase(getGroupPairsThunk.fulfilled, (state, action) => {
      state.groupPairs = action.payload;
    });

    builder.addCase(getGroupPairsThunk.rejected, (state) => {
      state.groupPairs = [];
    });

    builder.addCase(generateGroupPairsThunk.fulfilled, (state, action) => {
      state.selectedGroup = null;
      state.selectedGroup = action.payload;
    });

    builder.addCase(refreshDayThunk.fulfilled, (state, action) => {
      console.log(action.payload.subgroups);
      const day = state.groupPairs.find((el) => el.week === action.payload.weekDay);
      if (day) {
        const dayGroup = day.days.find(
          (el) => el.groupActivityDays.subgroup.id === action.payload.id,
        );
        if (dayGroup) {
          dayGroup.groupActivityDays.subgroup.subgrups = action.payload.subgroups.subgrups;
        }
      }
    });
  },
});

export const { setSelecdetGroup, cleanPairDays } = pairDaysSlice.actions;
export default pairDaysSlice.reducer;
