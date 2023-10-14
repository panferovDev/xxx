import { createAsyncThunk } from '@reduxjs/toolkit';
import type { PairsData, PairDaysType, PairDaysChaneType } from '@xxx/types/pairDaysType';
import type { AxiosResponse } from 'axios';
import {
  getPairDaysService,
  changeDayService,
  getPairsService,
  generateGroupPairsService,
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
