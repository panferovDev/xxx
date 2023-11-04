import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { GroupType } from '@xxx/types/studentsGroup';
import {
  addGroupThunk,
  addStudentsThunk,
  changeGroupThunk,
  deleteGroupThunk,
  deleteStudentThunk,
  repeatStudentThunk,
  updateNameStudentThunk,
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
      const group = state.find((el) => el.id === Number(action.payload.gId));
      if (group) {
        group.students = action.payload.students;
      }
    });
    builder.addCase(deleteGroupThunk.fulfilled, (state, action) =>
      state.filter((group) => group.id !== action.payload),
    );

    builder.addCase(deleteStudentThunk.fulfilled, (state, action) => {
      const group = state.find((el) => el.id === action.payload.gId);
      if (group) {
        group.students.splice(
          group.students.findIndex((el) => el.id === action.payload.sId),
          1,
        );
      }
    });

    builder.addCase(updateNameStudentThunk.fulfilled, (state, action) => {
      const group = state.find((el) => el.id === Number(action.payload.gId));
      if (group) {
        const student = group.students.find((el) => el.id === Number(action.payload.sId));
        if (student) {
          student.name = action.payload.updName;
        }
      }
    });

    builder.addCase(changeGroupThunk.fulfilled, (state, action) => {
      const groupFrom = state.find((el) => el.id === action.payload.from);
      const groupTo = state.find((el) => el.id === action.payload.to);
      if (groupFrom && groupTo) {
        groupFrom.students.splice(
          groupFrom.students.findIndex((el) => el.id === action.payload.student.id),
          1,
        );
        groupTo.students.push(action.payload.student);
      }
    });

    builder.addCase(repeatStudentThunk.fulfilled, (state, action) => {
      const group = state.find((el) => el.id === action.payload.gId);
      if (group) {
        const student = group.students.find((el) => el.id === action.payload.sId);
        if (student) {
          student.repeat = !student.repeat;
        }
      }
    });
  },
});

const groupReducer = groupsSlice.reducer;
export default groupReducer;
