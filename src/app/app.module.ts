import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { EffectsModule } from '@ngrx/effects';
import { StreamEffects } from './store/stream/stream.effects';
import { StreamService } from './shared/services/stream.service';

import { reducers } from './store';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { ErrorsModule } from './errors/errors.module';
import { StreamsModule } from './streams/streams.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([StreamEffects]),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule,
    AngularFireModule.initializeApp(environment.database),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StreamsModule,
    ErrorsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    StreamService
  ]
})
export class AppModule {}
