import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    StreamsModule,
    CoreModule
  ],
  bootstrap: [CoreModule.bootstrap]
})
export class PekachModule {}
