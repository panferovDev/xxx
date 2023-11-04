'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
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
    </Menubar>
  );
}

export default React.memo(AllGroupMenu);
