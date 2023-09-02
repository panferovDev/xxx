import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  UpdateStudentType,
  type DeleteStudentType,
  type GroupType,
  type StudentType,
  type groupAndStydentsFormType,
  MovedStudentType,
} from '@xxx/types/studentsGroup';
import { createGroupService, deleteGroupService } from '../../../services/groupService';
import {
  addStudentsService,
  changeGroupService,
  deleteStudentService,
  updateStudentService,
} from 'apps/client/services/studentService';

export const addGroupThunk = createAsyncThunk<GroupType, string>(
  'group/addGroup',
  async (groupName) => createGroupService(groupName).then((data) => data),
);

export const addStudentsThunk = createAsyncThunk<
  { students: StudentType[]; gId: string },
  groupAndStydentsFormType
>('group/addStudents', async (students) =>
  addStudentsService(students).then((data) => ({ students: data, gId: students.gId })),
);

export const deleteGroupThunk = createAsyncThunk<number, number>('group/deleteGroup', async (id) =>
  deleteGroupService(id).then((data) => data),
);

export const deleteStudentThunk = createAsyncThunk<DeleteStudentType, DeleteStudentType>(
  'group/deleteStudent',
  async (studentData) => deleteStudentService(studentData).then((data) => data),
);

export const updateNameStudentThunk = createAsyncThunk<UpdateStudentType, UpdateStudentType>(
  'group/updateStudent',
  async (updStudentData) => updateStudentService(updStudentData).then((data) => data),
);

export const changeGroupThunk = createAsyncThunk<MovedStudentType, Omit<MovedStudentType, 'from'>>(
  'group/changeGroup',
  async (move) =>
    changeGroupService(move).then((data) => ({
      from: move.student.groupId,
      student: data,
      to: move.to,
    })),
);
