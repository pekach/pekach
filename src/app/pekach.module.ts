import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from 'environments/environment';

import { CoreModule } from 'app/core';
import { StreamsModule } from 'app/streams';
import { SharedModule } from 'app/shared';
import { StatesModule } from 'app/states';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    StatesModule,
    AngularFireModule.initializeApp(environment.database),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StreamsModule,
    CoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 15
    })
  ],
  bootstrap: [CoreModule.bootstrap]
})
export class PekachModule {}
