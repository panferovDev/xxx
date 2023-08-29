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

export default function AddStudentsInGroup(): JSX.Element {
  return (
    <div className="mt-10">
      <h2 className="text-left text-violet-500 mb-1">Add students</h2>
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
          <Textarea id="students" className="h-40" style={{ resize: 'none' }} name="students" required />
        </FormItem>
        <div className="flex mt-4 justify-start">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
