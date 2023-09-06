import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

type Person = {
  name: string;
  seat: number;
};

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const arrShuffle = <T>(arr: T[]): T[] => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const tableDistribution = (students, teachers, date) => {
  const shuffledTeachers = arrShuffle(teachers);
  const shuffledStudents = arrShuffle(students);
  const teacherStudents = {};
  teachers.forEach((teacher) => {
    teacherStudents[teacher.id] = [];
  });

  shuffledStudents.forEach((student, index) => {
    const teacherId = shuffledTeachers[index % shuffledTeachers.length].id;
    teacherStudents[teacherId].push(student);
  });
  const maxStudents = Math.ceil(shuffledStudents.length / teachers.length);
  return { teacherStudents, maxStudents, date, teachers };
};

export function seatPeople(names: string[], seatsCount: number): Person[] {
  const seated: Person[] = [];

  for (let i = 0, j = 0; i < seatsCount && j < names.length; i += 2, j++) {
    seated.push({ name: names[j], seat: i + 1 });
  }

  const remainingNames = names.slice(seated.length);
  const emptySeats = Array.from({ length: seatsCount }, (_, i) => i + 1).filter(
    (seatNum) => !seated.some((person) => person.seat === seatNum),
  );

  for (let i = emptySeats.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [emptySeats[i], emptySeats[j]] = [emptySeats[j], emptySeats[i]];
  }

  arrShuffle(remainingNames);
  for (let i = 0; i < emptySeats.length && i < remainingNames.length; i++) {
    seated.push({ name: remainingNames[i], seat: emptySeats[i] });
  }

  return seated;
}
