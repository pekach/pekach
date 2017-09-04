import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { effects } from './effects';
import { reducers } from './reducers';

import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { StreamService } from '../shared';

import { RouterStateUrl } from './states';

export class TimeTravelingStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    return { url, queryParams };
  }
}

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule
  ],
  providers: [
    StreamService,
    { provide: RouterStateSerializer, useClass: TimeTravelingStateSerializer }
  ]
})
export class StatesModule {}
