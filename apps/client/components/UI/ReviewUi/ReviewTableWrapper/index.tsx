import React, { useRef, forwardRef } from 'react';
import ReviewTable from '../ReviewTable';
import { useAppSelector } from 'apps/client/features/redux/reduxHooks';

export default function ReviewTableWrapper(): JSX.Element | null{
  const review = useAppSelector((state) => state.review);
  const parentRef = useRef<HTMLTableElement>(null);
  if (!review.reviews.length) {
    return null;
  }

  return (
    <div>
      {review.reviews.map((el) => (
        <ReviewTable key={el.id} review={el} parentRef={parentRef} />
      ))}
    </div>
  );
}
