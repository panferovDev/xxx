'use client';

import { useEffect } from 'react';
import type { PairDaysType } from '@xxx/types/pairDaysType';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import { changeDayThunk, getPairDaysThunk } from '../features/redux/actions/pairDaysActions';

export default function usePairDays(): {
  pairDays: PairDaysType[];
  changeDayHandler: (value: string, dId: number) => void;
} {
  const dispatch = useAppDispatch();
  const pairDays = useAppSelector((state) => state.pairDays.pairDays);

  useEffect(() => {
    void dispatch(getPairDaysThunk());
  }, [dispatch]);

  const changeDayHandler = (value: string, dId: number): void => {
    void dispatch(changeDayThunk({ dayType: value, dayId: dId }));
  };

  return {
    pairDays,
    changeDayHandler,
  };
}
