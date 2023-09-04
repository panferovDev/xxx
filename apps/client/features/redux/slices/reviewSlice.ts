import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { TeacherType } from '@xxx/types/reviewTypes';
import type { GroupType } from '@xxx/types/studentsGroup';

export type InitialType = {
  teachers: TeacherType[];
  group: null | GroupType;
  days: number;
};

const initialState: InitialType = {
  teachers: [],
  days: 0,
  group: null,
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
    setDaysAction(state, action: PayloadAction<number>) {
      state.days = action.payload;
    },

    deleteTeacherAction(state, action: PayloadAction<string>) {
      state.teachers = state.teachers.filter((teacher) => teacher.id !== action.payload);
    },

    setGroup(state, action: PayloadAction<GroupType | null>) {
      state.group = action.payload;
    },
  },
});

export default reviewSlice.reducer;
export const {
  setTeacherAction, deleteTeacherAction, setDaysAction, setGroup,
} = reviewSlice.actions;
