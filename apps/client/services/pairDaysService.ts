import type {
  PairDaysType,
  PairDaysChaneType,
  PairsData,
  Subgroups,
  SubgroupRefreshType,
} from '@xxx/types/pairDaysType';
import type { AxiosResponse } from 'axios';
import { apiService } from './apiService';

export const getPairDaysService = (): Promise<PairDaysType[]> =>
  apiService.get<PairDaysType[]>('/pairdays').then((res) => res.data);

export const changeDayService = (data: PairDaysChaneType): Promise<PairDaysChaneType> =>
  apiService.patch<PairDaysChaneType>(`/pairdays/${String(data.dayId)}`, data).then(() => data);

export const getPairsService = (id: string): Promise<PairsData> =>
  apiService.get<PairsData>(`/pairgenerate/${id}`).then((res) => res.data);

export const generateGroupPairsService = (id: string): Promise<AxiosResponse> =>
  apiService.post(`/pairgenerate/${id}`);

export const refreshDayService = (
  data: SubgroupRefreshType,
): Promise<{ subgroups: Subgroups } & SubgroupRefreshType> =>
  apiService
    .patch<Subgroups>('/pairgenerate/day', data)
    .then((res) => ({ ...data, subgroups: res.data }));
