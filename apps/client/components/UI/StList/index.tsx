'use client';

import type { SeatStudent } from '@xxx/types/seatsTypes';
import StListItem from './stListItem';

type Props = {
  seats: SeatStudent[];
};
export default function Index({ seats }: Props): JSX.Element {
  return (
    <div className="border relative rounded-lg px-8 py-10 mt-3 mb-10 border-slate-500 ring-inset">
      {seats.length ? (
        <>
          <ul>
            {seats.map((student, index) => (
              <StListItem key={student.seat} index={index} student={student} />
            ))}
          </ul>
          <div className="border border-slate-400 rounded-lg py-2 px-10 absolute top-10 right-10">
            {seats.length}
          </div>
        </>
      ) : (
        <div>Введите список студентов и количество мест</div>
      )}
    </div>
  );
}
