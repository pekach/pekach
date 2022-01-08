import { NgModule } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { effects } from './effects';
import { reducers, RouterStateUrl } from './reducers';
import { environment } from 'src/environments/environment';

export class TimeTravelingStateSerializer
  implements RouterStateSerializer<RouterStateUrl>
{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    return { url, queryParams };
  }
}

@NgModule({
  imports: [],
  providers: [
    { provide: RouterStateSerializer, useClass: TimeTravelingStateSerializer },
  ],
})
export class StatesModule {}
