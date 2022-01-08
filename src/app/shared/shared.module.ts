import { NgModule } from "@angular/core";

import { FallbackSourceDirective } from "./directives";

@NgModule({
  declarations: [FallbackSourceDirective],
  exports: [FallbackSourceDirective],
})
export class SharedModule {}
