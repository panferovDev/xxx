import { useState } from 'react';
import type { SeatStudent, SeatType, UseStSeats } from '@xxx/types/seatsTypes';
import { useRouter } from 'next/navigation';
import { studentSeat } from '../services/studentService';

export const useStSeats = (): UseStSeats => {
  const [seats, setSeats] = useState<SeatStudent[]>([]);
  const router = useRouter();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as SeatType;
    studentSeat(data)
      .then((res) => {
        setSeats(res);
        console.log('res', res);
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { submitHandler, seats };
};
