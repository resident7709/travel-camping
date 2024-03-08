'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NAV_LINKS } from '@/constants';
import Button from './Button';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  return (
    <nav className='border-2 flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map(link => (
          <Link
            href={link.href}
            key={link.key}
            className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
            {link.label}
          </Link>
        ))}
      </ul>
      <div className='lg:flexCenter hidden'>
        <Button
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>
      <Image
        src='/menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
        onClick={handleToggle}
      />
      {toggle && (
        <div className='p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar'>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {NAV_LINKS.map(link => (
              <li
                key={link.key}
                className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
