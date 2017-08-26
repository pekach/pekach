import { Action } from '@ngrx/store';

import { Stream } from '../../shared/models/stream.model';

export const ADD_STREAM =             '[STREAM] Add Stream';
export const FETCH_STREAMS =          '[STREAM] Fetch Streams';
export const FETCH_STREAMS_SUCCESS =  '[STREAM] Fetch Streams Success';
export const FETCH_STREAMS_FAILURE =  '[STREAM] Fetch Streams Failure';

export class AddStreamAction implements Action {
  readonly type = ADD_STREAM;

  constructor(public payload: any) { }
}

export class FetchStreamsAction implements Action {
  readonly type = FETCH_STREAMS;
}

export class FetchStreamsSuccessAction implements Action {
  readonly type = FETCH_STREAMS_SUCCESS;

  constructor(public payload: Array<Stream>) { }
}

export class FetchStreamsFailureAction implements Action {
  readonly type = FETCH_STREAMS_SUCCESS;

  constructor(public payload: Array<Stream>) { }
}

export type Actions
  = AddStreamAction
  | FetchStreamsAction
  | FetchStreamsSuccessAction
  | FetchStreamsFailureAction;
