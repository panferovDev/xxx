import { use, useEffect } from 'react';
import type { GroupType } from '@xxx/types/studentsGroup';
import { useToast } from '@xxx/ui-components/Use-toast';
import { useAppDispatch, useAppSelector } from '../features/redux/reduxHooks';
import { setSelecdetGroup, cleanPairDays } from '../features/redux/slices/pairDaysSlice';
import {
  generateGroupPairsThunk,
  getGroupPairsThunk,
} from '../features/redux/actions/pairDaysActions';

export default function useSelectGroup(): {
  groups: GroupType[];
  changeHandler: (value: string) => void;
  selectedGroup: string | null;
  pairGenerateHandler: (id: string) => void;
} {
  const dispatch = useAppDispatch();
  const groups = useAppSelector((state) => state.groups);
  const selectedGroup = useAppSelector((state) => state.pairDays.selectedGroup);
  const { toast } = useToast();

  useEffect(() => {
    if (selectedGroup) {
      dispatch(getGroupPairsThunk(selectedGroup)).catch(() => {
        toast({
          description: 'Ошибка загрузки данных',
          duration: 2000,
        });
      });
    }
  }, [selectedGroup, dispatch, toast]);

  useEffect(
    () => () => {
      dispatch(cleanPairDays());
    },
    [dispatch],
  );

  const changeHandler = (value: string): void => {
    dispatch(setSelecdetGroup(value));
  };

  const pairGenerateHandler = (id: string): void => {
    dispatch(generateGroupPairsThunk(id))
      .then(() => {
        void dispatch(getGroupPairsThunk(id));
      })
      .catch(() => {
        toast({
          description: 'Ошибка генерации',
          duration: 2000,
        });
      });
  };

  return {
    groups,
    changeHandler,
    selectedGroup,
    pairGenerateHandler,
  };
}
