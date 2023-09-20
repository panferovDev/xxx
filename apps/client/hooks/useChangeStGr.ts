import type {
  DeleteStudentType,
  MovedStudentType,
  UpdateStudentType,
} from '@xxx/types/studentsGroup';
import type React from 'react';
import { useCallback } from 'react';
import { useToast } from '@xxx/ui-components/Use-toast';
import { useAppDispatch } from '../features/redux/reduxHooks';
import {
  changeGroupThunk,
  deleteStudentThunk,
  updateNameStudentThunk,
} from '../features/redux/actions/groupActions';

export default function useChangeStGr(): {
  studentSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  studentClickSubmit: (formRef: React.RefObject<HTMLFormElement>) => void;
  studentDeleteHandler: (delData: DeleteStudentType) => void;
  movedStudentHandler: (data: Omit<MovedStudentType, 'from'>) => void;
} {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const studentSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.currentTarget)) as UpdateStudentType;

      if (!data.gId || !data.updName) return;
      dispatch(updateNameStudentThunk(data))
        .then(() => {
          toast({
            description: 'Имя студента изменено',
            duration: 2000,
          });
        })
        .catch(() => {
          toast({
            description: 'Ошибка изменения',
            duration: 2000,
          });
        });
    },
    [dispatch],
  );
  const studentClickSubmit = useCallback(
    (formRef: React.RefObject<HTMLFormElement>): void => {
      if (formRef.current) {
        const data = Object.fromEntries(new FormData(formRef.current)) as UpdateStudentType;
        dispatch(updateNameStudentThunk(data))
          .then(() => {
            toast({
              description: 'Имя студента изменено',
              duration: 2000,
            });
          })
          .catch(() => {
            toast({
              description: 'Ошибка изменения',
              duration: 2000,
            });
          });
      }
    },
    [dispatch],
  );

  const studentDeleteHandler = useCallback(
    (delData: DeleteStudentType): void => {
      dispatch(deleteStudentThunk(delData))
        .then(() => {
          toast({
            description: 'Студент удален',
            duration: 2000,
          });
        })
        .catch(() => {
          toast({
            description: 'Ошибка удаления',
            duration: 2000,
          });
        });
    },
    [dispatch],
  );

  const movedStudentHandler = useCallback(
    (data: Omit<MovedStudentType, 'from'>): void => {
      void dispatch(changeGroupThunk(data));
    },
    [dispatch],
  );

  return {
    studentSubmit,
    studentClickSubmit,
    studentDeleteHandler,
    movedStudentHandler,
  };
}
