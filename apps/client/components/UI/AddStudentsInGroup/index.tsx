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
import { Card, CardHeader, CardTitle, CardContent } from '@xxx/ui-components/Card';
import useStGroups from '../../../hooks/useStGroups';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';

export default function AddStudentsInGroup(): JSX.Element {
  const groups = useAppSelector((state) => state.groups);

  const { studentSubmitHandler } = useStGroups();
  return (
    <Card className="mt-10 hover:border-purple-700  hover:border-opacity-30">
      <CardHeader>
        <CardTitle>Добавление студентов</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={studentSubmitHandler}>
          <FormItem>
            <Label>Выбор группы:</Label>
            <Select name="gId" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select group" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Groups</SelectLabel>
                  {groups.map((group) => (
                    <SelectItem key={group.id} value={`${group.id}`}>
                      {group.name}
                    </SelectItem>
                  ))}
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
          <span className='text-xs text-gray-400'>
            * Если имeна не уникальны, то они будут проигнорированы <br/>
            * Имена должны быть разделены переносом строки
          </span>
          <div className="flex mt-4 justify-start">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
