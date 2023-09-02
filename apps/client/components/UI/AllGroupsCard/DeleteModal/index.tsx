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
  id: number;
  setDelModal: (id: number | null) => void;
};

export default function DeleteModal({
  id,
  setDelModal
}: DeleteModalProps): JSX.Element | null {
  const dispatch = useAppDispatch();
  const deleteGroupHandler = () => {
    if (!id) return;
    dispatch(deleteGroupThunk(id)).then(() => setDelModal(null));
  };
  if (!id) return null;
  return (
    <Dialog open={!!id} onOpenChange={() => setDelModal(null)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-500 text-center">
            Подтвердите удаление группы
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Группа будет удалена со всеми студентами
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex w-full flex-col gap-2">
            <Button variant={'outline'} className="w-full" onClick={() => setDelModal(null)}>
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
