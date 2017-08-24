import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { StreamComponent } from './stream/stream.component';
import { StreamListComponent } from './stream-list/stream-list.component';
import { StreamPreviewComponent } from './stream-preview/stream-preview.component';

import { routes } from './streams.routes';

@NgModule({
  declarations: [
    StreamComponent,
    StreamListComponent,
    StreamPreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ]
})
export class StreamsModule {}
