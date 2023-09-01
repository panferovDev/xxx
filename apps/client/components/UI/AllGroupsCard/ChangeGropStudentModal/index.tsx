import type { GroupType } from '@xxx/types/studentsGroup';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@xxx/ui-components/Dialog';
import useChangeStGr from '../../../../hooks/useChangeStGr';
import StudentItem from './StudentItem';

export type ChangeGropStudentModalProps = {
  change: GroupType | null;
  setChange: (group: GroupType | null) => void;
  allGroups: GroupType[];
};

export default function ChangeGropStudentModal({
  change,
  setChange,
  allGroups,
}: ChangeGropStudentModalProps): JSX.Element | null {
  const { studentClickSubmit, studentSubmit, studentDeleteHandler } = useChangeStGr();
  if (!change) return null;
  return (
    <Dialog open={!!change} onOpenChange={() => setChange(null)}>
      <DialogContent className="max-h-[640px] overflow-scroll">
        <DialogHeader>
          <DialogTitle className=" text-center">
            Редактирование <br /> {change.name}
          </DialogTitle>
          {change.students.map((student) => (
            <StudentItem
              allGroups={allGroups}
              key={student.id}
              student={student}
              studentClickSubmit={studentClickSubmit}
              studentSubmit={studentSubmit}
              studentDeleteHandler={studentDeleteHandler}
            />
          ))}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
