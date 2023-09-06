import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { GroupType, ReviewSliceType } from '@xxx/types/studentsGroup';
import { submitReviewAction } from '../actions/reviewActions';

const initialState: ReviewSliceType = {
  teachers: [],
  days: [],
  group: null,
  rewiews: [],
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setTeacherAction(state, action: PayloadAction<string>) {
      state.teachers.push({
        id: uuidv4(),
        name: action.payload,
      });
    },
    setDaysAction(state, action: PayloadAction<string[]>) {
      state.days = action.payload;
    },

    deleteTeacherAction(state, action: PayloadAction<string>) {
      state.teachers = state.teachers.filter((teacher) => teacher.id !== action.payload);
    },

    setGroup(state, action: PayloadAction<number | null>) {
      state.group = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitReviewAction.fulfilled, (state, action) => {
      state.rewiews = action.payload.result;
    });
  },
});

export default reviewSlice.reducer;
export const { setTeacherAction, deleteTeacherAction, setDaysAction, setGroup } =
  reviewSlice.actions;
