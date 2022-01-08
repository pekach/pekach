import { Route } from "@angular/router";

import { NotFoundComponent } from "./errors";

export const routes: Array<Route> = [
  {
    path: "**",
    component: NotFoundComponent,
  },
];
