import { Action } from '@ngrx/store';
import { Stream } from 'app/shared';

import { ActionTypes } from './action.types';

export class AddStreamAction implements Action {
  readonly type = ActionTypes.ADD_STREAM;

  constructor(public payload: Stream) { }
}

export class FetchStreamsAction implements Action {
  readonly type = ActionTypes.FETCH_STREAMS;

  constructor(public payload = null) { }
}

export class FetchStreamsSuccessAction implements Action {
  readonly type = ActionTypes.FETCH_STREAMS_SUCCESS;

  constructor(public payload: Array<Stream>) { }
}

export class FetchStreamsFailureAction implements Action {
  readonly type = ActionTypes.FETCH_STREAMS_SUCCESS;

  constructor(public payload: Array<Stream>) { }
}

export type Actions
  = AddStreamAction
  | FetchStreamsAction
  | FetchStreamsSuccessAction
  | FetchStreamsFailureAction;
