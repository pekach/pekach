import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from 'environments/environment';

import { StreamService, FirebaseStreamService } from './services';
import { FallbackSourceDirective } from './directives';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.database),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  declarations: [
    FallbackSourceDirective
  ],
  providers: [
    {
      provide: StreamService,
      useClass: FirebaseStreamService
    }
  ],
  exports: [
    FallbackSourceDirective
  ]
})
export class SharedModule {}
