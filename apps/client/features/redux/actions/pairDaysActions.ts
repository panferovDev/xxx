import { createAsyncThunk } from '@reduxjs/toolkit';
import type { PairDaysType, PairDaysChaneType } from '@xxx/types/pairDaysType';
import { getPairDaysService, changeDayService } from '../../../services/pairDaysService';

export const getPairDaysThunk = createAsyncThunk<PairDaysType[]>('pairDays/getPairDays', async () =>
  getPairDaysService().then((data) => data));

export const changeDayThunk = createAsyncThunk<PairDaysChaneType, PairDaysChaneType>(
  'pairDays/changeDay',
  (data) => changeDayService(data).then(() => data),
);
