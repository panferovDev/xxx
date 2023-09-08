'use client';

import React from 'react';
import { Button } from '@xxx/ui-components/Button';
import { useAppDispatch, useAppSelector } from 'apps/client/features/redux/reduxHooks';
import { submitReviewAction } from 'apps/client/features/redux/actions/reviewActions';

export default function GenerateButton(): JSX.Element {
  const state = useAppSelector((state) => state.review);
  const dispatch = useAppDispatch()

  const check = (): boolean => {
    if (!state.group || !state.days || !state.teachers.length) {
      return true;
    }
    return false;
  };
  return (
    <div className="mt-3">
      <Button onClick={() => dispatch(submitReviewAction(state))} disabled={check()} type="button" className="w-full">
        {check() ? "Заполните все поля" : "Сгенерировать"}
      </Button>
    </div>
  );
}
