'use client';

import { Input } from '@xxx/ui-components/Input';
import { Button } from '@xxx/ui-components/Button';
import {
  Card, CardHeader, CardDescription, CardTitle, CardContent,
} from '@xxx/ui-components/Card';

export default function AddGroup(): JSX.Element {
  return (
    <Card className="hover:border-cyan-50">
      <CardHeader>
        <CardTitle>Добавление группы</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex">
            <Input className="block" type="text" placeholder="add group" />
            <Button className="ml-3" type="submit">
              submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
