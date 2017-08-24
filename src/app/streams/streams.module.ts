import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StreamComponent } from './stream/stream.component';
import { StreamListComponent } from './stream-list/stream-list.component';

import { routes } from './streams.routes';

@NgModule({
  declarations: [
    StreamComponent,
    StreamListComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class StreamsModule {}
