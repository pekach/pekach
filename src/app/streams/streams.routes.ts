import { Route } from '@angular/router';

import { StreamComponent } from './stream/stream.component';
import { StreamListComponent } from './stream-list/stream-list.component';

export const routes: Array<Route> = [
  {
    path: 'streams',
    component: StreamListComponent,
    data: {
      title: 'Трансляции — Пека.ch'
    }
  },
  {
    path: 'stream/:key',
    component: StreamComponent,
    data: {
      title: 'Стрим — Пека.ch'
    }
  }
];
