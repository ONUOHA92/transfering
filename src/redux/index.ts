import { createSlice } from '@reduxjs/toolkit';
// @ts-ignore
import allReducer from './reducer.ts';
// @ts-ignore
import state from "./state.ts";

export const modalSlice = createSlice({
  name: 'modal',
  initialState: state,
  reducers: allReducer
});



export const { handleOpenModal, handleCloseModal } = modalSlice.actions;
export default modalSlice.reducer;
