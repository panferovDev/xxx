import type { FormEvent } from 'react';
import { useCallback } from 'react';
import type { groupAndStydentsFormType } from '@xxx/types/studentsGroup';
import { useAppDispatch } from '../features/redux/reduxHooks';
import { addStudentsThunk } from '../features/redux/actions/groupActions';

const useStGroups = (): {
  studentSubmitHandler: (e: FormEvent<HTMLFormElement>) => void;
} => {
  const dispatch = useAppDispatch();
  const studentSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as groupAndStydentsFormType;
    if (!data.students && !data.gId) return;
    void dispatch(addStudentsThunk(data));
    e.currentTarget.reset();
  }, []);
  return {
    studentSubmitHandler,
  };
};

export default useStGroups;
