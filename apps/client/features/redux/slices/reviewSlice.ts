import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { ReviewSliceType, StudentType } from '@xxx/types/studentsGroup';
import { submitReviewAction } from '../actions/reviewActions';

const initialState: ReviewSliceType = {
  teachers: [],
  days: [],
  group: null,
  reviews: [],
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

    clearReviewAction() {
      return {
        teachers: [],
        days: [],
        group: null,
        reviews: [],
      };
    },

    deleteTeacherAction(state, action: PayloadAction<string>) {
      state.teachers = state.teachers.filter((teacher) => teacher.id !== action.payload);
    },

    setGroup(state, action: PayloadAction<number | null>) {
      state.group = action.payload;
    },

    changeDayAction(
      state,
      action: PayloadAction<{
        from: {
          dayId: string;
          teacherId: string;
        };
        to: {
          dayId: string;
          teacherId: string;
          student: StudentType;
        };
      }>,
    ) {
      const { from, to } = action.payload;
      const fromDay = state.reviews.find((day) => day.id === from.dayId);
      if (!fromDay) {
        return;
      }
      if (!fromDay.data[from.teacherId]) {
        return;
      }
      fromDay.data[from.teacherId] = fromDay.data[from.teacherId].filter(
        (student) => student.id !== to.student.id,
      );
      const fromKeys = Object.keys(fromDay.data);
      // math max students in day
      const fromMaxStudents = fromKeys.reduce((acc, key) => {
        if (fromDay.data[key].length > acc) {
          return fromDay.data[key].length;
        }
        return acc;
      }, 0);
      fromDay.maxStudents = fromMaxStudents;
      const toDay = state.reviews.find((day) => day.id === to.dayId);
      if (!toDay) {
        return;
      }
      toDay.data[to.teacherId].push(to.student);
      const keys = Object.keys(toDay.data);
      // math max students in day
      const maxStudents = keys.reduce((acc, key) => {
        if (toDay.data[key].length > acc) {
          return toDay.data[key].length;
        }
        return acc;
      }, 0);
      toDay.maxStudents = maxStudents;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitReviewAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
  },
});

export default reviewSlice.reducer;
export const {
  setTeacherAction,
  deleteTeacherAction,
  setDaysAction,
  setGroup,
  changeDayAction,
  clearReviewAction,
} = reviewSlice.actions;
