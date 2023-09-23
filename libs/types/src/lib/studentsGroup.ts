import { TeacherType } from './reviewTypes';

export type groupAndStydentsFormType = {
  gId: string;
  students: string;
};

export type GroupType = {
  id: number;
  name: string;
  students: StudentType[];
};

export type StudentType = {
  id: number;
  name: string;
  repeat: boolean;
  groupId: number;
};
export type GroupWithStudentsType = {
  id: number;
  name: string;
  students: StudentType[];
};

export type DeleteStudentType = {
  sId: number;
  gId: number;
};

export type UpdateStudentType = {
  sId: string;
  gId: string;
  updName: string;
};

export type MovedStudentType = {
  to: number;
  from: number;
  student: StudentType;
};

export type ReviewSliceType = {
  showRepeat: boolean;
  teachers: TeacherType[];
  group: null | number;
  days: string[];
  reviews: TeacherStudentsType[]
};

export type ReviewSubmitType = {
  teachers: TeacherType[];
  group: null | number;
  days: string[];
};

export type TeacherStudentsType = {
  id: string;
  data: {
    [key: string]: StudentType[];
  };
  maxStudents: number;
  date: string;
  teachers: TeacherType[];
};
