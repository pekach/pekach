import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';

import * as StreamActions from './stream.actions';

@Injectable()
export class StreamEffects {
  @Effect()
  getStream$: Observable<Action> = this.actions$
    .ofType(StreamActions.ADD_STREAM)
    .map((action: StreamActions.AddStreamAction) => action.payload)
    .switchMap(message => empty());

  constructor(protected actions$: Actions) {}
}
