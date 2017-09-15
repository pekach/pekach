import { NgModule } from '@angular/core';

import { StreamService } from './services';
import { FallbackSourceDirective } from './directives';

@NgModule({
  declarations: [
    FallbackSourceDirective
  ],
  providers: [
    StreamService
  ],
  exports: [
    FallbackSourceDirective
  ]
})
export class SharedModule {}
