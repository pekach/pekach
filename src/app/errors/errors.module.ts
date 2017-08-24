import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { routes } from './errors.routes';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ErrorsModule {}
