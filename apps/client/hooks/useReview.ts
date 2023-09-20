import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../features/redux/reduxHooks';
import {
  deleteTeacherAction,
  setTeacherAction,
  setDaysAction,
  setGroup,
  clearReviewAction,
} from '../features/redux/slices/reviewSlice';

export default function useReview(): {
  submitTeacherHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteTeacherHandler: (id: string) => void;
  setDays: (arr: string[]) => void;
  setGroupHandler: (data: number | null) => void;
} {
  const dispatch = useAppDispatch();


  const submitTeacherHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.currentTarget)) as { name: string };
      e.currentTarget.reset();
      if (!data.name) return;
      dispatch(setTeacherAction(data.name));
    },
    [dispatch],
  );

  const setDays = useCallback(
    (arr: string[]): void => {
      dispatch(setDaysAction(arr));
    },
    [dispatch],
  );

  useEffect(
    () => (): void => {
      dispatch(clearReviewAction());
    },
    [dispatch],
  );

  const deleteTeacherHandler = useCallback(
    (id: string): void => {
      dispatch(deleteTeacherAction(id));
    },
    [dispatch],
  );

  const setGroupHandler = useCallback(
    (data: number | null): void => {
      dispatch(setGroup(data));
    },
    [dispatch],
  );

  return {
    submitTeacherHandler,
    deleteTeacherHandler,
    setDays,
    setGroupHandler,
  };
}
