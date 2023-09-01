'use client';

import type { GroupType } from '@xxx/types/studentsGroup';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@xxx/ui-components/Menubar';
import React from 'react';

export type AllGroupMenuProps = {
  setSelectedGr: (gr: GroupType | null) => void;
  group: GroupType;
  change: GroupType | null;
  setChange: (group: GroupType | null) => void;
};

function AllGroupMenu({
  setSelectedGr, group, change, setChange,
}: AllGroupMenuProps): JSX.Element {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Редактирование</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => setChange(change)}>Изменить</MenubarItem>
          <MenubarItem onClick={() => setSelectedGr(group)} className="text-red-700">
            Удалить
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>{' '}
      |
      <MenubarMenu>
        <MenubarTrigger>Просмотр</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default React.memo(AllGroupMenu);
