import * as fromStreams from './stream/stream.reducer';
import { combineReducers } from '@ngrx/store';

export interface State {
  streams: fromStreams.State;
}

export function reducers(state: any, action: any) {
  const reducers = {
    streams: fromStreams.reducer
  };

  return combineReducers(reducers);
}
