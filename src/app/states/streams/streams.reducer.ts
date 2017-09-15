import { Stream } from 'app/shared';
import { ActionTypes } from './action.types';

import * as StreamsActions from './streams.actions';

export interface State {
  loading: boolean;
  streams: Array<Stream>;
}

const initialState: State = {
  loading: false,
  streams: []
};

export function reducer(state: State = initialState, action: StreamsActions.Actions) {
  switch (action.type) {
    case ActionTypes.ADD_STREAM: {
      return {
        ...state,
        loading: true
      };
    }

    case ActionTypes.FETCH_STREAMS_SUCCESS: {
      const newState: State = {
        streams: action.payload,
        loading: false
      };

      return newState;
    }

    default: {
      return state;
    }
  }
}

export const getStream = (state: State) => state.streams;
