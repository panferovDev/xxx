'use client';

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@xxx/ui-components/Menubar';
import React from 'react';

export type AllGroupMenuProps = {
  setDelModal: (id: number | null) => void;
  setStudentsChangeModal: (bool: boolean) => void;
  id: number;
};

function AllGroupMenu({ setDelModal, id, setStudentsChangeModal }: AllGroupMenuProps): JSX.Element {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Редактирование</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => setStudentsChangeModal(true)}>Изменить</MenubarItem>
          <MenubarItem onClick={() => setDelModal(id)} className="text-red-700">
            Удалить
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>{' '}
      {/* |
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
      </MenubarMenu> */}
    </Menubar>
  );
}

export default React.memo(AllGroupMenu);
