import * as StreamActions from './stream.actions';

export interface State {
  loading: boolean;
  streams: Array<any>;
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
    default: {
      return state;
    }
  }
}

