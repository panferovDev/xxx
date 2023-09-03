'use client';

import React from 'react';
import useReview from '../../hooks/useReview';
import Dates from '../UI/ReviewUi/Dates';
import Groups from '../UI/ReviewUi/Groups';
import Teachers from '../UI/ReviewUi/Teachers';
import GenerateButton from '../UI/ReviewUi/GenerateButton';

export default function ReviewPage(): JSX.Element {
  const { deleteTeacherHandler, submitTeacherHandler, setDays } = useReview();

  return (
    <div className="flex md:flex-row sm:flex-col gap-5">
      <div className="w-full md:w-19/12">
        <h2>right</h2>
      </div>
      <div className="w-full md:w-3/12">
        <Groups />
        <Dates setDays={setDays}/>
        <Teachers
          submitTeacherHandler={submitTeacherHandler}
          deleteTeacherHandler={deleteTeacherHandler}
        />
        <GenerateButton />
      </div>
    </div>
  );
}
