import { useCallback } from 'react';
import type { GroupType } from '@xxx/types/studentsGroup';
import { useAppDispatch } from '../features/redux/reduxHooks';
import {
  deleteTeacherAction,
  setTeacherAction,
  setDaysAction,
  setGroup,
} from '../features/redux/slices/reviewSlice';

export default function useReview(): {
  submitTeacherHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteTeacherHandler: (id: string) => void;
  setDays: (num: number) => void;
  setGroupHandler: (data: GroupType | null) => void;
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
    (num: number): void => {
      dispatch(setDaysAction(num));
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
    (data: GroupType | null): void => {
      console.log(data);

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
