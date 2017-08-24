import { Route } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Array<Route> = [
  {
    path: '**',
    component: NotFoundComponent,
  }
];
