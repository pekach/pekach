import { NgModule } from '@angular/core';

import { StreamService } from './services/stream.service';

@NgModule({
  providers: [
    StreamService
  ]
})
export class SharedModule {}
