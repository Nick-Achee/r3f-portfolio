import Link from 'next/link';
import React from 'react';
import Nav from '../components/Nav';
import ThemeSwitch from './ThemeSwitch';

const MainNav = (): JSX.Element => {
  return (
    <header className="bg-red-500 dark:bg-gray-500">
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Nav />
            <ThemeSwitch />
          </div>
        </div>
      </header>
  );
};

export default MainNav;







