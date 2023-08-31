/* eslint-disable react/jsx-props-no-spreading */

'use client';

import Link from 'next/link';
import { cn } from '../../../utils/index';

export default function Navigation({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>): JSX.Element {
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Dashboard
      </Link>
      <Link
        href="/exam"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Exam
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        scheduler
      </Link>
      <Link
        href="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        scheduler
      </Link>
    </nav>
  );
}
