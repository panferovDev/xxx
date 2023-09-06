import React from 'react';
import ReviewTable from '../ReviewTable';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';

export default function ReviewTableWrapper(): JSX.Element {
  const review = useAppSelector((state) => state.review);
  if(!review.rewiews.length) {
    return <div>Нет данных</div>;
  }

  return (
    <div>
        {review.rewiews.map(el => <ReviewTable key={el.id} review={el} />)}
    </div>
  );
}
