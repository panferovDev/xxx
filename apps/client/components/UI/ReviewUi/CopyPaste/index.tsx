import React from 'react';
import { Copy } from 'lucide-react';
import useCopyPaste from '../../../../hooks/useCopyPaste';

export default function CopyPaste(): JSX.Element {
  const { copyHandler } = useCopyPaste();
  return (
    <div className="self-end cursor-pointer">
      <Copy onClick={() => void copyHandler()} />
    </div>
  );
}
