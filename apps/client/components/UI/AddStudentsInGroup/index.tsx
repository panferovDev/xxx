'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@xxx/ui-components/Select';
import { Textarea } from '@xxx/ui-components/Textarea';
import { Label } from '@xxx/ui-components/Label';
import { FormItem } from '@xxx/ui-components/Form';
import { Button } from '@xxx/ui-components/Button';
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '@xxx/ui-components/Card';

export default function AddStudentsInGroup(): JSX.Element {
  return (
    <Card className="mt-10 hover:border-cyan-50">
      <CardHeader>
        <CardTitle>Добавление студентов</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <FormItem>
            <Label>Выбор группы:</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select group" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Groups</SelectLabel>
                  <SelectItem value="apple">Tigers-msk-2023</SelectItem>
                  <SelectItem value="banana">Bears-msk-2023</SelectItem>
                  <SelectItem value="blueberry">Raccoons-msk-2023</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem className="mt-2">
            <Label htmlFor="list">Студенты:</Label>
            <Textarea
              id="students"
              className="h-40"
              style={{ resize: 'none' }}
              name="students"
              required
            />
          </FormItem>
          <div className="flex mt-4 justify-start">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
