import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import * as fromStreams from './streams/streams.reducer';

export interface States {
  streams: fromStreams.State;
}

export const reducers: ActionReducerMap<States> = {
  streams: fromStreams.reducer
};
