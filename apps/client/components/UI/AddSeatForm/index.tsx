'use client';

import React from 'react';
import { Label } from '@xxx/ui-components/Label';
import { Input } from '@xxx/ui-components/Input';
import { FormItem } from '@xxx/ui-components/Form';
import { Button } from '@xxx/ui-components/Button';
import { Textarea } from '@xxx/ui-components/Textarea';
import { CardTitle } from '@xxx/ui-components/Card';

type Props = {
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function index({ submitHandler }: Props): JSX.Element {
  return (
    <form onSubmit={submitHandler} className="w-full">
      <CardTitle>Сгенерировать рассадку студентов</CardTitle>
      <FormItem className="mt-2">
        <Label htmlFor="list">Укажите количество мест</Label>
        <Input id="seats" type="number" name="num" />
      </FormItem>
      <FormItem className="mt-2">
        <Label htmlFor="list">Добавьте список</Label>
        <Textarea id="list" style={{ resize: 'none' }} name="students" />
      </FormItem>
      <div className="flex mt-4 justify-start">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
