import { createSlice } from '@reduxjs/toolkit';

const initState: string[] = [];

const studentsSlice = createSlice({
  name: 'students',
  initialState: initState,
  reducers: {},
});

export default studentsSlice.reducer;
