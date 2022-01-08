import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Type } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NotFoundComponent } from "./errors";
import { RootComponent } from "./root";
import { routes } from "./core.routes";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
  ],
  declarations: [RootComponent, NotFoundComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class CoreModule {
  static bootstrap: Array<Type<any> | any[]> = [RootComponent];
}
