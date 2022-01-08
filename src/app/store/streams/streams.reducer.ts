import { Stream } from '@app/shared';
import { createReducer, on } from '@ngrx/store';
import { fetchStreamsSuccess } from '.';
import { addStream } from './streams.actions';

export interface State {
  loading: boolean;
  streams: Array<Stream>;
}

const initialState: State = {
  loading: false,
  streams: [],
};

export const streamsReducer = createReducer(
  initialState,
  on(
    addStream,
    (state): State => ({
      ...state,
      loading: true,
    })
  ),
  on(
    fetchStreamsSuccess,
    (_, action): State => ({
      streams: action.payload,
      loading: false,
    })
  )
);

export const getStream = (state: State) => state.streams;
