'use client';

import React from 'react';
import ShowRepeat from '../UI/ShowRepeat';
import useReview from '../../hooks/useReview';
import Dates from '../UI/ReviewUi/Dates';
import Groups from '../UI/ReviewUi/Groups';
import Teachers from '../UI/ReviewUi/Teachers';
import GenerateButton from '../UI/ReviewUi/GenerateButton';
import ReviewTableWrapper from '../UI/ReviewUi/ReviewTableWrapper';

export default function ReviewPage(): JSX.Element {
  const {
    deleteTeacherHandler, submitTeacherHandler, setDays, setGroupHandler,
  } = useReview();

  return (
    <>
      <ShowRepeat />
      <div className="flex md:flex-row flex-col gap-5 mb-10">
        <div className="w-12/12 md:w-9/12">
          <ReviewTableWrapper />
        </div>
        <div className="w-12/12 md:w-3/12">
          <Groups setGroupHandler={setGroupHandler} />
          <Dates setDays={setDays} />
          <Teachers
            submitTeacherHandler={submitTeacherHandler}
            deleteTeacherHandler={deleteTeacherHandler}
          />
          <GenerateButton />
        </div>
      </div>
    </>
  );
}
