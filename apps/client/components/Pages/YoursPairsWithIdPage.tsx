import React from 'react';
import YourPairsAnchor from '../UI/yourpairsAnchor';
import { yourPairs } from '../../utils/yourPairs';

type Props = {
  id: string;
};

export default async function YoursPairsWithIdPage({ id }: Props): Promise<JSX.Element> {
  const pairs = await yourPairs(+id);

  return (
    <div className="flex  min-w-full flex-col">
      {!pairs ? (
        <span className="text-center text-2xl">Пары не найдены</span>
      ) : (
        <div className="grid z-10 grid-rows-1 md:grid-rows-3">
          <YourPairsAnchor />
          {pairs.map((pair) => (
            <div key={pair.week} className="flex flex-col  w-full">
              <span id={`${pair.week}`} className="text-center uppercase mb-3">{pair.week}</span>
              {pair.days.map((day) => (
                <div
                  key={day.dayId}
                  className="grid md:grid-cols-[1fr,5fr] rounded-lg gap-1 border my-1 border-purple-700 border-opacity-30"
                >
                  <div className="flex flex-col h-full justify-center items-center">
                    <span>{day.day}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3 p-2">
                    {day.subgroup.map((subgroup) => (
                      <div
                        key={subgroup.id}
                        className="flex flex-col rounded-lg dark:bg-purple-500 dark:bg-opacity-10 bg-purple-100  p-2 relative"
                      >
                        <ul className="list-inside  p-1">
                          {subgroup.students.map((student) => (
                            <li key={student.id} className="text-center">
                              {student.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
