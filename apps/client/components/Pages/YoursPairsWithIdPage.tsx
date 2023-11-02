import React from 'react';

type Props = {
  id: string;
};

export default async function YoursPairsWithIdPage({ id }: Props): Promise<JSX.Element> {
  return (
    <div className="flex w-full flex-row">
      <span>content</span>
    </div>
  );
}
