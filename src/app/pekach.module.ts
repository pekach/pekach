import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'environments/environment';

import { CoreModule } from 'app/core';
import { StreamsModule } from 'app/streams';
import { SharedModule } from 'app/shared';
import { StatesModule } from 'app/states';

@NgModule({
  imports: [
    CommonModule,
    StatesModule,
    AngularFireModule.initializeApp(environment.database),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    StreamsModule,
    CoreModule
  ],
  bootstrap: [CoreModule.bootstrap]
})
export class PekachModule { }
