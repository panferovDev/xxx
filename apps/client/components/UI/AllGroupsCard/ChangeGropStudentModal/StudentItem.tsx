import type { DeleteStudentType, GroupType, StudentType } from '@xxx/types/studentsGroup';
import React, { useRef } from 'react';
import { Input } from '@xxx/ui-components/Input';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@xxx/ui-components/Menubar';
import useChangeStGr from '../../../../hooks/useChangeStGr';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';

export type StudentItemProps = {
  student: StudentType;
};

function StudentItem({ student }: StudentItemProps): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const allGroups = useAppSelector((state) => state.groups);
  const { studentClickSubmit, studentDeleteHandler, studentSubmit, movedStudentHandler } =
    useChangeStGr();

  return (
    <div className="flex justify-between items-center mt-3">
      <form ref={formRef} onSubmit={studentSubmit}>
        <Input name="sId" defaultValue={student.id} type="hidden" />
        <Input name="gId" defaultValue={student.groupId} type="hidden" />
        <Input name="updName" className="w-100" defaultValue={student.name} />
      </form>
      <div className="flex justify-end mr-15">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="text-purple-600">действия</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => studentClickSubmit(formRef)}>Изменить</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Переместить</MenubarSubTrigger>
                <MenubarSubContent>
                  {allGroups
                    .filter((group) => group.id !== student.groupId)
                    .map((group) => (
                      <MenubarItem
                        key={group.id}
                        onClick={() => movedStudentHandler({ student: student, to: group.id })}
                      >
                        {group.name}
                      </MenubarItem>
                    ))}
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem
                onClick={() => studentDeleteHandler({ sId: student.id, gId: student.groupId })}
                className="text-red-500"
              >
                Удалить
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
export default React.memo(StudentItem);
