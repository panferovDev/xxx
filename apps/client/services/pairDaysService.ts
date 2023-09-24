import type { PairDaysType, PairDaysChaneType } from '@xxx/types/pairDaysType';
import { apiService } from './apiService';

export const getPairDaysService = (): Promise<PairDaysType[]> =>
  apiService.get<PairDaysType[]>('/pairdays').then((res) => res.data);

export const changeDayService = (data: PairDaysChaneType): Promise<PairDaysChaneType> =>
  apiService
    .patch<PairDaysChaneType>(`/pairdays/${String(data.dayId)}`, data)
    .then(() => data);
