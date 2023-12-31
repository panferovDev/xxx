'use client';

import { Input } from '@xxx/ui-components/Input';
import { Button } from '@xxx/ui-components/Button';
import {
  Card, CardHeader, CardTitle, CardContent,
} from '@xxx/ui-components/Card';
import useGroup from '../../../hooks/useGroup';

export default function AddGroup(): JSX.Element {
  const { submitHandler } = useGroup();
  return (
    <Card className="hover:border-purple-700 hover:border-opacity-30">
      <CardHeader>
        <CardTitle>Добавление группы</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submitHandler}>
          <div className="flex flex-row gap-3">
            <Input name="group" className="block w-full" type="text" placeholder="add group" />
            <Button className="ml-3" type="submit">
              submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
