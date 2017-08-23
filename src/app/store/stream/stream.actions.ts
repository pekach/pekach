import { Action } from '@ngrx/store';

export const ADD_STREAM =           '[Stream] Add Stream';

export class AddStreamAction implements Action {
  readonly type = ADD_STREAM;
  constructor(public payload: any) { }
}

export type Actions
  = AddStreamAction;
