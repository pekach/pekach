import { Params } from '@angular/router';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromStreams from './streams/streams.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export interface AppState {
  streams: fromStreams.State;
  routes: RouterReducerState<RouterStateUrl>;
}

export const selectStreamsFeature =
  createFeatureSelector<fromStreams.State>('streams');

export const reducers: ActionReducerMap<AppState> = {
  streams: fromStreams.streamsReducer,
  routes: routerReducer,
};
