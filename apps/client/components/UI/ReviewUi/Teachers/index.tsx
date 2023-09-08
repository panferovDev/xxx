import React from 'react';
import { Input } from '@xxx/ui-components/Input';
import TList from './TList';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';

export type TeachersProps = {
  submitTeacherHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteTeacherHandler: (id: string) => void;
};

function Teachers({ submitTeacherHandler, deleteTeacherHandler }: TeachersProps): JSX.Element {
  const teachers = useAppSelector((state) => state.review.teachers);
  return (
    <>
      <div className="flex flex-col gap-5 mt-2">
        <h3 className=" text-gray-400 ">Преподаватели:</h3>
        <form onSubmit={submitTeacherHandler}>
          <div className="flex">
            <Input name="name" className="block" type="text" placeholder="Имя" />
          </div>
        </form>
      </div>
      {teachers.map((teacher) => (
        <TList deleteTeacherHandler={deleteTeacherHandler} key={teacher.id} teacher={teacher} />
      ))}
    </>
  );
}

export default React.memo(Teachers);
