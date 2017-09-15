import { NgModule } from '@angular/core';
import { Params, RouterStateSnapshot } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { effects } from './effects';
import { reducers, RouterStateUrl } from './reducers';

export class TimeTravelingStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    return { url, queryParams };
  }
}

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({ maxAge: 15 })
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: TimeTravelingStateSerializer }
  ]
})
export class StatesModule { }
