/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../../utils/index';

export default function Navigation({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>): JSX.Element {
  const pathname = usePathname();
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6 self-center mx-auto', className)} {...props}>
      <Link href="/" className={pathname === '/' ? 'active' : 'uppercase '}>
        dashboard
      </Link>

      <Link
        href="/exam"
        className={pathname === '/exam' ? 'active' : 'uppercase '}
      >
        exam
      </Link>
      <Link
        href="/review"
        className={pathname === '/review' ? 'active' : 'uppercase '}
      >
        review
      </Link>
      <Link
        href="/pairs"
        className={pathname === '/pairs' ? 'active' : 'uppercase '}
      >
        pairs
      </Link>
    </nav>
  );
}
