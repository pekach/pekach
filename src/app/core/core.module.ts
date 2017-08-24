import { NgModule } from '@angular/core';

import { AuthenticationGuard } from './guards/authentication.guard';

@NgModule({
  providers: [AuthenticationGuard]
})
export class PekachCoreModule {}
