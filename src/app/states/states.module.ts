import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { effects } from './effects';
import { reducers } from './reducers';

import { StreamService } from '../shared';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 100
    }),
  ],
  providers: [StreamService]
})
export class StatesModule {}
