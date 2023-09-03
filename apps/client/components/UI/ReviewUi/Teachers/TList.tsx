import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@xxx/ui-components/Avatar';

export default function TList(): JSX.Element {
  return (
    <div className="flex items-center justify-between space-x-4 mt-2">
      <div className="flex items-center space-x-4">
        <div>
          <p className=" font-medium text-gray-400 leading-none">Teacher</p>
        </div>
      </div>
      <div>
        <button className="text-red-500">&#x2715;</button>
      </div>
    </div>
  );
}
