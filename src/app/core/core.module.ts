import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors';
import { RootComponent } from './root';
import { AuthenticationGuard } from './guards';
import { routes } from './core.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    RootComponent,
    NotFoundComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class CoreModule {
  static bootstrap: Array<Type<any> | any[]> = [RootComponent];
}
