'use client';

import React from 'react';
import { Calendar } from '@xxx/ui-components/Calendar';
import { Input } from '@xxx/ui-components/Input';
import { Button } from '@xxx/ui-components/Button';

export default function TestPage(): JSX.Element {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <div className="flex mx-auto justify-center mt-10">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <div className="flex mx-auto justify-center mt-10">
        <Input />
      </div>
      <div className="flex mx-auto justify-center mt-10">
        <Button> ok </Button>
      </div>
    </>
  );
}
