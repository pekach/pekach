import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { reducers } from './store';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { ErrorsModule } from './errors/errors.module';
import { StreamsModule } from './streams/streams.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ reducers, routerReducer }),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule,
    AngularFireModule.initializeApp(environment.database),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ErrorsModule,
    StreamsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
