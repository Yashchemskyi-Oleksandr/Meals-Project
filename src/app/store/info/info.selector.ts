import { AppState } from 'src/app/store/app.state';
import { createSelector } from '@ngrx/store';
import { Info } from './info.model';

export const selectInfo = createSelector(
  (state: AppState) => state.info,
  (info: Info) => info
);
