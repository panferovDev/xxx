import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReviewSubmitType, TeacherStudentsType } from '@xxx/types/studentsGroup';
import { submitReviewServise } from 'apps/client/services/reviewService';


export const submitReviewAction = createAsyncThunk<TeacherStudentsType[],ReviewSubmitType>(
    'rewiev/submit',
    async(review) => 
    submitReviewServise(review)
    .then((res) => res)
)