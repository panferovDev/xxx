import type { TeacherType } from '@xxx/types/reviewTypes';
import React from 'react';

export type TListProps = {
  deleteTeacherHandler: (id: string) => void;
  teacher: TeacherType;
};
function TList({ deleteTeacherHandler, teacher }: TListProps): JSX.Element {
  return (
    <div className="flex items-center justify-between space-x-4 mt-2">
      <div className="flex items-center space-x-4">
        <div>
          <p className=" font-medium text-gray-400 leading-none">{teacher.name}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => deleteTeacherHandler(teacher.id)}
          className="text-red-500"
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
}
export default React.memo(TList);
