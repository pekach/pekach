import * as fromStreams from './stream/stream.reducer';
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';

export { StoreModule } from './store.module';

export interface State {
  streams: fromStreams.State;
}

export const reducers: ActionReducerMap<State> = {
  streams: fromStreams.reducer
};

export const getStream = (state: State) => state.streams;
