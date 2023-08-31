import type { SeatType, SeatStudent } from '@xxx/types/seatsTypes';
import type { groupAndStydentsFormType, StudentType } from '@xxx/types/studentsGroup';
import type { AxiosError } from 'axios';
import { apiService } from './apiService';

export const studentSeat = (obj: SeatType): Promise<SeatStudent[]> =>
  apiService
    .post<SeatStudent[]>('/', obj)
    .then(({ data }) => data)
    .catch((err: AxiosError) => {
      throw new Error(err.message);
    });

export const addStudentsService = (students: groupAndStydentsFormType): Promise<StudentType[]> =>
  apiService
    .post<StudentType[]>('/students', students)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err));
