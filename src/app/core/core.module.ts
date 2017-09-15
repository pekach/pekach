import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NotFoundComponent } from './errors';
import { RootComponent } from './root';
import { AuthenticationGuard } from './guards';
import { routes } from './core.routes';

import {
  MdButtonModule,
  MdToolbarModule,
  MdIconModule,
  MdMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
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
