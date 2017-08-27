import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { PekachModule } from './app/pekach.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PekachModule);
