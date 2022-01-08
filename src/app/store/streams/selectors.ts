import { createSelector } from '@ngrx/store';
import { selectStreamsFeature } from '../reducers';

export const selectStreams = createSelector(
  selectStreamsFeature,
  (state) => state.streams
);
