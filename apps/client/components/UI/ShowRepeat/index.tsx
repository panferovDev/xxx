import React from 'react';
import { Checkbox } from '@xxx/ui-components/Checkbox';
import { useAppDispatch, useAppSelector } from 'apps/client/features/redux/reduxHooks';
import { setSowRepeatAction } from 'apps/client/features/redux/slices/reviewSlice';

export default function ShowRepeat(): JSX.Element {
    const dispatch = useAppDispatch();
    const showRepeat = useAppSelector((state) => state.review.showRepeat);
    

  return (
    <div className="flex justify-start items-center gap-2">
      <Checkbox id="repeat" checked={showRepeat} onClick={() => {dispatch(setSowRepeatAction())}} />
      <label
        htmlFor="repeat"
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Выделить повторяющих
      </label>
    </div>
  );
}
