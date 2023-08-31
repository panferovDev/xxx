'use client';

import type { GroupType } from '@xxx/types/studentsGroup';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@xxx/ui-components/Dialog';
import { Button } from '@xxx/ui-components/Button';
import { useAppDispatch } from 'apps/client/features/redux/reduxHooks';
import { deleteGroupThunk } from 'apps/client/features/redux/actions/groupActions';

export type DeleteModalProps = {
  selectedGr: GroupType | null;
  setSelectedGr: (gr: GroupType | null) => void;
};

export default function DeleteModal({
  selectedGr,
  setSelectedGr,
}: DeleteModalProps): JSX.Element | null {
  const dispatch = useAppDispatch();
  const deleteGroupHandler = () => {
    if (!selectedGr) return;
    dispatch(deleteGroupThunk(selectedGr.id)).then(() => setSelectedGr(null));
  };
  if (!selectedGr) return null;
  return (
    <Dialog open={!!selectedGr}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-500 text-center">
            Вы действительно хотите удалить <br /> {selectedGr.name} ?
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Группа будет удалена со всеми студентами
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex w-full flex-col gap-2">
            <Button variant={'outline'} className="w-full" onClick={() => setSelectedGr(null)}>
              нет
            </Button>
            <Button variant="destructive" onClick={deleteGroupHandler}>
              да
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
