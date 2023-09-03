'use client';

import React from 'react';
import { Button } from '@xxx/ui-components/Button';

export default function GenerateButton(): JSX.Element {
  return (
    <div>
      <Button type="button" className="w-full">
        Сгенерировать
      </Button>
    </div>
  );
}