import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@xxx/ui-components/Avatar';
import type { GroupType } from '@xxx/types/studentsGroup';
import AllGroupMenu from '../AllGroupMenu';
import DeleteModal from '../DeleteModal';
import ChangeGropStudentModal from '../ChangeGropStudentModal';

export type GroupItemProps = {
  group: GroupType;
};

function GroupItem({ group }: GroupItemProps): JSX.Element {
  const [delModal, setDelModal] = useState<number | null>(null);
  const [studentsChangeModal, setStudentsChangeModal] = useState<boolean>(false);

  return (
    <>
      {delModal && <DeleteModal id={delModal} setDelModal={setDelModal} />}
      {studentsChangeModal && (
        <ChangeGropStudentModal
          studentsChangeModal={studentsChangeModal}
          setStudentsChangeModal={setStudentsChangeModal}
          group={group}
        />
      )}
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${group.name}`} />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div>
            <p className=" font-medium leading-none">{group.name}</p>
            <p className="text-sm text-muted-foreground">Студентов: {group.students.length}</p>
          </div>
        </div>
        <AllGroupMenu
          setDelModal={setDelModal}
          id={group.id}
          setStudentsChangeModal={setStudentsChangeModal}
        />
      </div>
    </>
  );
}
export default React.memo(GroupItem);
