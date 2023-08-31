import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GroupType, StudentType, groupAndStydentsFormType } from '@xxx/types/studentsGroup';
import { createGroupService, deleteGroupService } from '../../../services/groupService';
import { addStudentsService } from 'apps/client/services/studentService';

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

export const deleteGroupThunk = createAsyncThunk<number, number>(
  'group/deleteGroup',
  async (id) => 
  deleteGroupService(id).then((data) => data),
);
