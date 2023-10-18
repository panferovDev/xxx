import React from 'react';
import { Clipboard } from 'lucide-react';
import useCopyPaste from '../../../../hooks/useCopyPaste';

export default function CopyPaste(): JSX.Element {
  const { copyHandler } = useCopyPaste();
  return (
    <div className="self-end cursor-pointer hover:text-gray-500">
      <Clipboard onClick={void copyHandler} />
    </div>
  );
}
