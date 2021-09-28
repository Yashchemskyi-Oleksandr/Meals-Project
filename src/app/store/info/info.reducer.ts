import { getInfo, updateInfo, createInfo } from './info.action';
import { createReducer, on } from '@ngrx/store';
import { Info } from './info.model';

export const initialState: Info | {} = {};

export const infoReducer = createReducer(
  initialState,
  on(getInfo, (state, { info }) => {
    return info;
  }),

  on(updateInfo, (state, { updatedInfo }) => {
    console.log(updatedInfo);
    return { ...state, ...updatedInfo };
  }),

  on(createInfo, (state, { newInfo }) => {
    console.log(newInfo);

    return { ...state, ...newInfo };
  })
);
