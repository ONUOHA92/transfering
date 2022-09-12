import { configureStore, combineReducers } from '@reduxjs/toolkit';
// @ts-ignore
import modalReducer from './index.ts';
import userReducer from './features/userSlice'

// @ts-ignore


const rootReducer = combineReducers({
  isModalOpen: modalReducer,
  user: userReducer

})

export const store = configureStore({
  reducer: rootReducer

});
