import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { States } from './states'
import * as fromStreams from './streams/streams.reducer';

export const reducers: ActionReducerMap<States> = {
  streams: fromStreams.reducer,
  routerReducer: routerReducer
};
