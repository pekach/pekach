import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ActionTypes } from './action.types';
import * as StreamsActions from './streams.actions';

import { StreamService } from 'app/shared';

@Injectable()
export class StreamEffects {
    @Effect()
    addStream$: Observable<Action> = this.actions$
        .ofType(ActionTypes.ADD_STREAM)
        .map((action: StreamsActions.AddStreamAction) => action.payload)
        .switchMap(message => empty());

    @Effect()
    subscribeToStreams$: Observable<Action> = this.actions$
        .ofType(ActionTypes.FETCH_STREAMS)
        .switchMap(() => this.streamService.Subscribe())
        .map((results) => new StreamsActions.FetchStreamsSuccessAction(results))
        .catch(() => of(new StreamsActions.FetchStreamsFailureAction([])));

    constructor(
        protected actions$: Actions,
        protected streamService: StreamService
    ) { }
}
