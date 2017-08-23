import { BrowserModule } from '@angular/platform-browser';
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
import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ reducers, routerReducer }),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule,
    AngularFireModule.initializeApp(environment.database),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
