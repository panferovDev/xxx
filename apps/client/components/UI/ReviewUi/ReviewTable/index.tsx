'use client';

import type { TeacherStudentsType } from '@xxx/types/studentsGroup';
import React from 'react';

export type ReviewTableProps = {
  review: TeacherStudentsType;
};

export default function ReviewTable({ review }: ReviewTableProps): JSX.Element {
  return (
    <div className="mt-9">
      <table className="border-collapse border w-full table-fixed border-slate-500 border-opacity-25 rounded-sm">
        <thead>
          <tr>
            <th className="border border-slate-500 border-opacity-25  vertical-bottom-to-top bg-violet-600">
              дата
            </th>
            {review.teachers.map((teacher) => (
              <th key={teacher.id} className="border border-slate-500 text-gray-200 border-opacity-25 bg-violet-600 uppercase">
                {teacher.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: review.maxStudents }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {rowIndex === 0 && (
                <td
                  rowSpan={review.maxStudents}
                  className={`text-center w-1/${review.teachers.length + 1}`}
                >
                  {review.date}
                </td>
              )}
              {review.teachers.map((teacher) => (
                <td
                  key={teacher.id}
                  className={`border border-slate-500 border-opacity-25 text-center p-1 w-1/${
                    review.teachers.length + 1
                  }`}
                >
                  {review.data[teacher.id][rowIndex] ? review.data[teacher.id][rowIndex].name : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
