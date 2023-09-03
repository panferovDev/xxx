'use client';

import React, { useState, useEffect } from 'react';
import { Calendar } from '@xxx/ui-components/Calendar';
import { ru } from 'date-fns/locale';

export type DatesProps = {
  setDays: (num: number) => void;
};

export default function Dates({ setDays }: DatesProps): JSX.Element {
  const [dates, setDates] = useState<Date[] | undefined>([]);
  useEffect(() => {
    setDays(dates?.length || 0);
  }, [dates]);

  return (
    <div className="flex flex-col gap-5 mt-2">
      <h3 className=" text-gray-400 ">Дни ревью:</h3>
      <Calendar
        mode="multiple"
        onSelect={setDates}
        selected={dates}
        locale={ru}
        className="rounded-md border"
      />
    </div>
  );
}
