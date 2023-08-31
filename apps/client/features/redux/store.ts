/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { StateFromReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { GroupType } from '@xxx/types/studentsGroup';
import studentReducer from './slices/studentSlice';
import groupReducer from './slices/groupsSlice';

export type State = {
  groups: GroupType[];
  students: [];
};
const reducer = {
  students: studentReducer,
  groups: groupReducer,
};

const store = ({ groups }: { groups: GroupType[] }) => configureStore({
  reducer: {
    students: studentReducer,
    groups: groupReducer,
  },
  preloadedState: {
    groups,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

type Store = ReturnType<typeof store>;
export type RootState = StateFromReducersMapObject<typeof reducer>;
export type AppDispatch = Store['dispatch'];

export default store;
