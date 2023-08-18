'use client';

import React from 'react';
import { Label } from '@xxx/ui-components/Label';
import { Input } from '@xxx/ui-components/Input';
import { FormItem } from '@xxx/ui-components/Form';
import { Button } from '@xxx/ui-components/Button';
import { CardTitle, CardDescription } from '@xxx/ui-components/Card';

export default function index(): JSX.Element {
  return (
    <form className="w-full">
      <CardTitle>Сгенерировать рассадку студентов</CardTitle>
      <FormItem className="mt-2">
        <Label htmlFor="list">добавьте список</Label>
        <Input id="list" width="100%" />
      </FormItem>
      <div className="flex mt-4 justify-start">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
