import type { DeleteStudentType } from '@xxx/types/studentsGroup';
import type React from 'react';
import { useCallback } from 'react';
import { useAppDispatch } from '../features/redux/reduxHooks';
import { deleteStudentThunk } from '../features/redux/actions/groupActions';

export default function useChangeStGr(): {
  studentSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  studentClickSubmit: (formRef: React.RefObject<HTMLFormElement>) => void;
  studentDeleteHandler: (delData: DeleteStudentType) => void;
} {
  const dispatch = useAppDispatch();
  const studentSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as {
      id: string;
      name: string;
    };

    if (!data.id || !data.name) return;

    console.log(data);
  }, []);
  const studentClickSubmit = useCallback((formRef: React.RefObject<HTMLFormElement>): void => {
    if (formRef.current) {
      const data = Object.fromEntries(new FormData(formRef.current));
      console.log(data);
    }
  }, []);

  const studentDeleteHandler = useCallback((delData: DeleteStudentType): void => {
    void dispatch(deleteStudentThunk(delData));
  }, [dispatch]);

  return { studentSubmit, studentClickSubmit, studentDeleteHandler };
}
