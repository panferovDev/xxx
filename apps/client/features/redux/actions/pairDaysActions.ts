import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  PairsData,
  PairDaysType,
  PairDaysChaneType,
  Subgroups,
  SubgroupRefreshType,
} from '@xxx/types/pairDaysType';
import type { AxiosResponse } from 'axios';
import {
  getPairDaysService,
  changeDayService,
  getPairsService,
  generateGroupPairsService,
  refreshDayService,
} from '../../../services/pairDaysService';

export const getPairDaysThunk = createAsyncThunk<PairDaysType[]>('pairDays/getPairDays', async () =>
  getPairDaysService().then((data) => data));

export const changeDayThunk = createAsyncThunk<PairDaysChaneType, PairDaysChaneType>(
  'pairDays/changeDay',
  (data) => changeDayService(data).then(() => data),
);

export const getGroupPairsThunk = createAsyncThunk<PairsData, string>(
  'pairDays/getGroupPairs',
  async (id) => getPairsService(id).then((data) => data),
);

export const generateGroupPairsThunk = createAsyncThunk<string, string>(
  'pairDays/generateGroupPairs',
  async (id) => generateGroupPairsService(id).then(() => id),
);

export const refreshDayThunk = createAsyncThunk<
{ subgroups: Subgroups } & SubgroupRefreshType,
SubgroupRefreshType
>('pairDays/refreshDay', async (data) => refreshDayService(data).then((res) => res));
