import * as React from 'react'
export type SeatType = {
  num: string;
  students: string;
};

export type SeatStudent = {
  name: string;
  seat: number;
};


export type UseStSeats = {
  seats: SeatStudent[];
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
};
