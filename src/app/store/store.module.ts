import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { StreamEffects } from './stream/stream.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([StreamEffects])
  ]
})
export class StoreModule {}
