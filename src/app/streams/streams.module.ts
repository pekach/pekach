import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'app/shared';

import { StreamComponent } from './stream/stream.component';
import { StreamListComponent } from './stream-list/stream-list.component';
import { StreamPreviewComponent } from './stream-preview/stream-preview.component';

import {
  MdButtonModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdGridListModule,
  MdChipsModule
} from '@angular/material';

import { routes } from './streams.routes';
@NgModule({
  declarations: [
    StreamComponent,
    StreamListComponent,
    StreamPreviewComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    RouterModule.forChild(routes),
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    MdChipsModule
  ]
})
export class StreamsModule { }
