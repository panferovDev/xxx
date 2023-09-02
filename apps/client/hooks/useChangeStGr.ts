import type {
  DeleteStudentType,
  MovedStudentType,
  UpdateStudentType,
} from '@xxx/types/studentsGroup';
import type React from 'react';
import { useCallback } from 'react';
import { useAppDispatch } from '../features/redux/reduxHooks';
import { changeGroupThunk, deleteStudentThunk, updateNameStudentThunk } from '../features/redux/actions/groupActions';

export default function useChangeStGr(): {
  studentSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  studentClickSubmit: (formRef: React.RefObject<HTMLFormElement>) => void;
  studentDeleteHandler: (delData: DeleteStudentType) => void;
  movedStudentHandler: (data: Omit<MovedStudentType, 'from'>) => void;
} {
  const dispatch = useAppDispatch();
  const studentSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.currentTarget)) as UpdateStudentType;

      if (!data.gId || !data.updName) return;
      void dispatch(updateNameStudentThunk(data));
    },
    [dispatch],
  );
  const studentClickSubmit = useCallback(
    (formRef: React.RefObject<HTMLFormElement>): void => {
      if (formRef.current) {
        const data = Object.fromEntries(new FormData(formRef.current)) as UpdateStudentType;
        void dispatch(updateNameStudentThunk(data));
      }
    },
    [dispatch],
  );

  const studentDeleteHandler = useCallback(
    (delData: DeleteStudentType): void => {
      void dispatch(deleteStudentThunk(delData));
    },
    [dispatch],
  );

  const movedStudentHandler = useCallback(
    (data: Omit<MovedStudentType, 'from'>): void => {
      void dispatch(changeGroupThunk(data));
    },
    [dispatch],
  );

  return { studentSubmit, studentClickSubmit, studentDeleteHandler, movedStudentHandler };
}
