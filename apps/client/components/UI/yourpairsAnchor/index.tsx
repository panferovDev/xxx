'use client';

import { animateScroll as scroll } from 'react-scroll';

export default function YourPairsAnchor(): JSX.Element {
  const scrollDuration = 500; // Длительность анимации прокрутки

  const handleScrollTo = (targetId: string): void => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetY = targetElement.offsetTop;
      scroll.scrollTo(targetY, {
        smooth: true,
        duration: scrollDuration,
      });
    }
  };
  return (
    <div className="fixed z-20  flex flex-col gap-3 top-1/2 right-[-15px] transform-translate-y-1/2 text-white p-4">
      <span
        onClick={() => handleScrollTo('Неделя 1')}
        className="h-15 w-15 bg-purple-800 text-black dark:border-white border-purple-800 bg-opacity-40  dark:text-white cursor-pointer p-3 rounded-md border"
      >
        1
      </span>
      <span
        onClick={() => handleScrollTo('Неделя 2')}
        className="h-15 w-15 text-black bg-purple-800 dark:border-white border-purple-800  bg-opacity-40  dark:text-white cursor-pointer p-3 rounded-md border"
      >
        2
      </span>
      <span
        onClick={() => handleScrollTo('Неделя 3')}
        className="h-15 w-15 text-black bg-purple-800 dark:border-white border-purple-800  bg-opacity-40  dark:text-white cursor-pointer p-3 rounded-md border"
      >
        3
      </span>
    </div>
  );
}
