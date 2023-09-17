import React from 'react';
import { Badge } from '@xxx/ui-components/Badge';
import type { TeacherType } from '@xxx/types/reviewTypes';

export type TitemProps = {
  deleteTeacherHandler: (id: string) => void;
  teacher: TeacherType;
};

export default function Titem({ deleteTeacherHandler, teacher }: TitemProps): JSX.Element {
  return (
    <Badge variant="secondary" className="flex items-center text-sm">
      {teacher.name}{' '}
      <button
        type="button"
        onClick={() => deleteTeacherHandler(teacher.id)}
        className=" bg-purple-600 text-white text-sm w-4 h-4 ml-2 rounded-full flex items-center justify-center"
      >
        &#x2715;
      </button>
    </Badge>
  );
}
