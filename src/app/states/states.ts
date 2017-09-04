import { Params } from '@angular/router';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromStreams from './streams/streams.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export interface States {
  streams: fromStreams.State;
  routerReducer: RouterReducerState<RouterStateUrl>;
}
