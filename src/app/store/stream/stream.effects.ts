import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as StreamActions from './stream.actions';

import { StreamService } from '../../shared/services/stream.service';

@Injectable()
export class StreamEffects {
  @Effect()
  addStream$: Observable<Action> = this.actions$
    .ofType(StreamActions.ADD_STREAM)
    .map((action: StreamActions.AddStreamAction) => action.payload)
    .switchMap(message => empty());

  @Effect()
  getStreams$: Observable<Action> = this.actions$
    .ofType(StreamActions.FETCH_STREAMS)
    .switchMap(() => this.streamService.getStreams())
    .map((results) => new StreamActions.FetchStreamsSuccessAction(results))
    .catch(() => of(new StreamActions.FetchStreamsFailureAction([])));

  constructor(
    protected actions$: Actions,
    protected streamService: StreamService
  ) {}
}
