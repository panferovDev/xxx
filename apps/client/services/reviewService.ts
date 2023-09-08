import type { ReviewSubmitType, TeacherStudentsType } from '@xxx/types/studentsGroup';
import { apiService } from './apiService';

export const submitReviewServise = (review: ReviewSubmitType): Promise<TeacherStudentsType[]> =>
  apiService
    .post<TeacherStudentsType[]>('/review', review)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
