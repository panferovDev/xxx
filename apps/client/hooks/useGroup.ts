import type { FormEvent } from 'react';
import { addGroupThunk } from '../features/redux/actions/groupActions';
import { useAppDispatch } from '../features/redux/reduxHooks';

export default function useGroup(): {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
} {
  const dispatch = useAppDispatch();

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as { group: string };
    e.currentTarget.reset();
    if (!data.group) return;
    void dispatch(addGroupThunk(data.group));
  };

  return { submitHandler };
}
