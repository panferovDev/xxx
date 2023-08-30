import type { FormEvent } from 'react';
import { useCallback } from 'react';
import type { groupAndStydentsFormType } from '@xxx/types/studentsGroup';
import { addStudentsService } from '../services/studentService';

const useStGroups = (): {
  studentSubmitHandler: (e : FormEvent<HTMLFormElement>) => void
} => {
  const studentSubmitHandler = useCallback((e : FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as groupAndStydentsFormType;
    addStudentsService(data);
  }, []);

  return {
    studentSubmitHandler,
  };
};

export default useStGroups;
