import React, { useState, useEffect } from 'react';
import { Switch } from '@xxx/ui-components/Switch';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

export default function Theme(): JSX.Element {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    setChecked(currentTheme === 'dark');

    const html = document.querySelector('html');
    if (currentTheme === 'dark' && html) {
      html.classList.add('dark');
    } else if (html) {
      html.classList.add('light');
    }
  }, []);

  const toggleTheme = (): void => {
    const html = document.querySelector('html');
    if (!html) return;

    const newTheme = checked ? 'light' : 'dark';

    html.classList.remove('dark', 'light');
    html.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setChecked(!checked);
  };

  return (
    <>
      <Switch onCheckedChange={toggleTheme} checked={checked} className="mr-2" />
      {checked ? <MoonIcon className="mr-2" /> : <SunIcon className="mr-2" />}
    </>
  );
}
