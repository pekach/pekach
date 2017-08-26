import { Stream } from '../../shared/models/stream.model';
import * as StreamActions from './stream.actions';


export interface State {
  loading: boolean;
  streams: Array<Stream>;
}

const initialState: State = {
  loading: false,
  streams: []
};

export function reducer(state: State = initialState, action: StreamActions.Actions) {
  switch (action.type) {
    case StreamActions.ADD_STREAM: {
      return {
        ...state,
        loading: true
      };
    }

    case StreamActions.FETCH_STREAMS_SUCCESS: {
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

