import { createAction, props } from '@ngrx/store';
import { Info } from './info.model';

export const createInfo = createAction(
  'CREATE_INFO',
  props<{ newInfo: Info }>()
);

export const getInfo = createAction('GET_INFO', props<{ info: Info }>());

export const updateInfo = createAction(
  'UPDATE_INFO',
  props<{ updatedInfo: Info }>()
);
