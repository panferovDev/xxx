import { createAsyncThunk } from '@reduxjs/toolkit';
import { RevievSubmitType } from '@xxx/types/studentsGroup';
import { submitReviewServise } from 'apps/client/services/reviewService';


export const submitReviewAction = createAsyncThunk<Promise<void>,RevievSubmitType>(
    'rewiev/submit',
    async(review) => 
    submitReviewServise(review)
)