import type { SubgroupRefreshType } from '@xxx/types/pairDaysType';
import { useAppDispatch } from '../features/redux/reduxHooks';
import { refreshDayThunk } from '../features/redux/actions/pairDaysActions';

export default function useDayRefresh(): {
  refreshDay: (data: SubgroupRefreshType) => Promise<void>;
} {
  const dispatch = useAppDispatch();

  const refreshDay = async (data: SubgroupRefreshType): Promise<void> => {
    void dispatch(refreshDayThunk(data));
  };

  return { refreshDay };
}
