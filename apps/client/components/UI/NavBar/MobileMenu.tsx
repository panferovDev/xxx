import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@xxx/ui-components/Menubar';
import { ExitIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function MobileMenu(): JSX.Element {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Menu</MenubarTrigger>
        <MenubarContent>
          <Link href="/">
            <MenubarItem>
              Dashboard
            </MenubarItem>
          </Link>
          <Link href="/exam">
            <MenubarItem>
              Exam
            </MenubarItem>
          </Link>
          <Link href="/review">
            <MenubarItem>
              Review
            </MenubarItem>
          </Link>
          <MenubarItem className="flex gap-3">
            Logout <ExitIcon />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
