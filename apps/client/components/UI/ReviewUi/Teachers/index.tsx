import React from 'react';
import { Input } from '@xxx/ui-components/Input';
import { Button } from '@xxx/ui-components/Button';
import TList from './TList';

export default function Teachers(): JSX.Element {
  return (
    <>
      <div className="flex flex-col gap-5 mt-2">
        <h3 className=" text-gray-400 ">Преподаватели:</h3>
        <form>
          <div className="flex">
            <Input name="name" className="block" type="text" placeholder="Имя" />
          </div>
        </form>
      </div>
      <TList />
      <TList />
      <TList />
      <TList />
      <TList />
    </>
  );
}
