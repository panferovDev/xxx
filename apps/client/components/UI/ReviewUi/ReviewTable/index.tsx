'use client';

import React from 'react';

export default function ReviewTable({ review }): JSX.Element {
  return (
    <div className="mt-9">
      <table className="border-collapse border w-full table-fixed border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-500 bg-slate-700 vertical-bottom-to-top">дата</th>
            {review.teachers.map((teacher) => (
              <th key={teacher.id} className="border border-slate-500 bg-slate-700">
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
                  className={`border border-slate-500 text-center p-1 w-1/${
                    review.teachers.length + 1
                  }`}
                >
                  {review.teacherStudents[teacher.id][rowIndex]
                    ? review.teacherStudents[teacher.id][rowIndex].name
                    : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
