import React from 'react';
import Dates from '../UI/ReviewUi/Dates';
import Groups from '../UI/ReviewUi/Groups';
import Teachers from '../UI/ReviewUi/Teachers';
import GenerateButton from '../UI/ReviewUi/GenerateButton';

export default function ReviewPage(): JSX.Element {
  return (
    <div className="flex md:flex-row sm:flex-col gap-5">
      <div className="w-full md:w-19/12">
        <h2>right</h2>
      </div>
      <div className="w-full md:w-3/12">
        <Groups />
        <Dates />
        <Teachers />
        <GenerateButton />
      </div>
    </div>
  );
}
