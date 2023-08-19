import type { SeatType, SeatStudent } from '@xxx/types/seatsTypes';
import type { AxiosError } from 'axios';
import { apiService } from './apiService';

export const studentSeat = (obj: SeatType): Promise<SeatStudent[]> => apiService
  .post<SeatStudent[]>('/', obj)
  .then(({ data }) => data)
  .catch((err: AxiosError) => {
    throw new Error(err.message);
  });
