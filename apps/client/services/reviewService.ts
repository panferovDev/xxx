import type { ReviewSliceType } from '@xxx/types/studentsGroup';
import { apiService } from './apiService';

export const submitReviewServise = (review: ReviewSliceType): void => {
  apiService
    .post('/review', review)
    .catch((err) => console.log(err));
};
