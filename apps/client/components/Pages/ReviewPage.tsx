'use client';

import React from 'react';
import useReview from '../../hooks/useReview';
import Dates from '../UI/ReviewUi/Dates';
import Groups from '../UI/ReviewUi/Groups';
import Teachers from '../UI/ReviewUi/Teachers';
import GenerateButton from '../UI/ReviewUi/GenerateButton';
import ReviewTable from '../UI/ReviewUi/ReviewTable';

export default function ReviewPage(): JSX.Element {
  const {
    deleteTeacherHandler, submitTeacherHandler, setDays, setGroupHandler,
  } = useReview();

  return (
    <div className="flex md:flex-row sm:flex-col gap-5 mb-10">
      <div className="w-full md:w-9/12">
        <ReviewTable />
      </div>
      <div className="w-full md:w-3/12">
        <Groups setGroupHandler={setGroupHandler} />
        <Dates setDays={setDays} />
        <Teachers
          submitTeacherHandler={submitTeacherHandler}
          deleteTeacherHandler={deleteTeacherHandler}
        />
        <GenerateButton />
      </div>
    </div>
  );
}
