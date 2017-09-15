import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'app/core';
import { StreamsModule } from 'app/streams';
import { SharedModule } from 'app/shared';
import { StatesModule } from 'app/states';

@NgModule({
  imports: [
    CommonModule,
    StatesModule,
    StreamsModule,
    CoreModule
  ],
  bootstrap: [CoreModule.bootstrap]
})
export class PekachModule { }
