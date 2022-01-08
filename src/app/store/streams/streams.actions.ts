import { createAction, props } from "@ngrx/store";
import { Stream } from "@app/shared";

export const addStream = createAction(
  "[STREAM] Add Stream",
  props<{ payload: Stream }>()
);

export const fetchStreams = createAction("[STREAM] Fetch Streams");

export const fetchStreamsSuccess = createAction(
  "[STREAM] Fetch Streams Success",
  props<{ payload: Array<Stream> }>()
);

export const fetchStreamsFailure = createAction(
  "[STREAM] Fetch Streams Failure",
  props<{ payload: Array<Stream> }>()
);
