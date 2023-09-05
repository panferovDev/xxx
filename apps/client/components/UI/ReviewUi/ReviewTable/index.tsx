'use client';

import React from 'react';

export default function ReviewTable(): JSX.Element {
  return (
    <div className="mt-5">
      <table className="border-collapse border border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-500 bg-slate-700 bg-opacity-20 vertical-bottom-to-top">
              дата
            </th>
            <th className="border border-slate-500 bg-slate-700 bg-opacity-60 hover:bg-slate-400">
              Alex
            </th>
            <th className="border border-slate-500 bg-slate-700 bg-opacity-60">Julia</th>
            <th className="border border-slate-500 bg-slate-700 bg-opacity-60">Adom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={3} className="text-center">
              09.07
            </td>
            <td className="border border-slate-500 text-center p-1 ">John Dow</td>
            <td className="border border-slate-500 text-center p-1">John Dow</td>
            <td className="border border-slate-500 text-center p-1">John Dow a1</td>
          </tr>
          <tr>
            <td className="border border-slate-500 text-center p-1">John Dow</td>
            <td className="border border-slate-500 text-center p-1">John Dow</td>
            <td className="border border-slate-500 text-center p-1">John Dow a2</td>
          </tr>
          <tr>
            <td className="border border-slate-500 text-center p-1">John Dow</td>
            <td className="border border-slate-500 text-center p-1" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
