import type { GroupType } from '@xxx/types/studentsGroup';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@xxx/ui-components/Dialog';
import StudentItem from './StudentItem';

export type ChangeGropStudentModalProps = {
  studentsChangeModal: boolean;
  setStudentsChangeModal: (bool: boolean) => void;
  group: GroupType;
};

export default function ChangeGropStudentModal({
  studentsChangeModal,
  setStudentsChangeModal,
  group,
}: ChangeGropStudentModalProps): JSX.Element | null {
  if (!studentsChangeModal) return null;
  return (
    <Dialog open={studentsChangeModal} onOpenChange={() => setStudentsChangeModal(false)}>
      <DialogContent className="max-h-[640px] overflow-scroll">
        <DialogHeader>
          <DialogTitle className=" text-center">
            Редактирование <br /> {group?.name}
          </DialogTitle>
          {group?.students.map((student) => (
            <StudentItem
              key={student.id}
              student={student}
            />
          ))}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
