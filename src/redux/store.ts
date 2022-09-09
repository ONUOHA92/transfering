import { configureStore, combineReducers } from '@reduxjs/toolkit';
// @ts-ignore
import modalReducer from './index.ts';

// @ts-ignore


const rootReducer = combineReducers({
  isModalOpen: modalReducer,

})

export const store = configureStore({
  reducer: rootReducer

});
