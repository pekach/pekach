import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  fetchStreams,
  fetchStreamsFailure,
  fetchStreamsSuccess,
} from './streams.actions';
import { FirebaseStreamService } from '@app/shared';

@Injectable()
export class StreamEffects {
  /*
  addStream$ = createEffect(() => {
    return this.actions$.pipe(ofType(addStream));
  });
  */

  subscribeToStreams$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchStreams),
      switchMap(() => this.streamService.subscribe()),
      map((results) => fetchStreamsSuccess({ payload: results })),
      catchError(() => of(fetchStreamsFailure({ payload: [] })))
    );
  });

  constructor(
    protected actions$: Actions,
    protected streamService: FirebaseStreamService
  ) {}
}
