import { createReducer, on } from '@ngrx/store';

import { getInfo, updateInfo, createInfo } from './info.action';
import { Info } from './info.model';

export const initialState: Info | {} = {};

export const infoReducer = createReducer(
  initialState,
  on(getInfo, (state, { info }) => {
    return info;
  }),

  on(updateInfo, (state, { updatedInfo }) => {
    return { ...state, ...updatedInfo };
  }),

  on(createInfo, (state, { newInfo }) => {
    return { ...state, ...newInfo };
  })
);
