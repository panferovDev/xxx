import React from 'react';
import { Input } from '@xxx/ui-components/Input';
import TList from './TList';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';
import Titem from './Titem';

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
      <div className="flex flex-wrap gap-2 mt-4">
        {teachers.map((teacher) => (
          <Titem deleteTeacherHandler={deleteTeacherHandler} key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </>
  );
}

export default React.memo(Teachers);
