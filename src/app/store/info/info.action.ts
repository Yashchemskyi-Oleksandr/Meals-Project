import { createAction, props } from '@ngrx/store';
import { Info } from './info.model';

export const createInfo = createAction(
  '[INFO] CREATE',
  props<{ newInfo: Info }>()
);

export const getInfo = createAction('[INFO] GET', props<{ info: Info }>());

export const updateInfo = createAction(
  '[INFO] UPDATE',
  props<{ updatedInfo: Info }>()
);
