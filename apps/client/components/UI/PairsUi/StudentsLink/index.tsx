'use client';

import React from 'react';
import Link from 'next/link';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';

export default function StudentLink(): JSX.Element | null {
  const id = useAppSelector((state) => state.pairDays.selectedGroup);
  if (!id) return null;
  return (
    <div>
      <span className="text-lg ml-3">Ссылка на расписание для студентов:</span>
      <Link className="text-lg ml-3" href={`/pairdays/${id}`}>
        click
      </Link>
    </div>
  );
}
