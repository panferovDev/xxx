import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { GroupType } from '@xxx/types/studentsGroup';
import {
  addGroupThunk, addStudentsThunk, deleteGroupThunk, deleteStudentThunk,
} from '../actions/groupActions';

const initialState: GroupType[] = [];

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<GroupType[]>) => {
      state.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addGroupThunk.fulfilled, (state, action) => {
      const check = state.find((group) => group.id === action.payload.id);
      if (!check) {
        state.push(action.payload);
      }
    });
    builder.addCase(addStudentsThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      const group = state.find((el) => el.id === Number(action.payload.gId));
      if (group) {
        group.students = action.payload.students;
      }
    });
    builder.addCase(deleteGroupThunk.fulfilled, (state, action) =>
      state.filter((group) => group.id !== action.payload));

    builder.addCase(deleteStudentThunk.fulfilled, (state, action) => {
      const group = state.find((el) => el.id === action.payload.gId);
      if (group) {
        group.students.splice(group.students.findIndex((el) => el.id === action.payload.sId), 1); 
      }
    });
  },
});

const groupReducer = groupsSlice.reducer;
export default groupReducer;
