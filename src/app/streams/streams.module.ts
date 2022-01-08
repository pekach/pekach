import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@app/shared";

import { StreamComponent } from "./stream/stream.component";
import { StreamListComponent } from "./stream-list/stream-list.component";
import { StreamPreviewComponent } from "./stream-preview/stream-preview.component";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";

import { routes } from "./streams.routes";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [StreamComponent, StreamListComponent, StreamPreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
  ],
})
export class StreamsModule {}
