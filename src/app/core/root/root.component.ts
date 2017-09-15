import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'ch-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './root.component.html',
  styleUrls: []
})
export class RootComponent {

  /*
    login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
    this.afAuth.auth.signOut();
    }
  */

  constructor(protected router: Router, private titleService: Title) {
    // this.user = afAuth.authState;

    // const values = this.db.list('streams');

    // (window as any).vls = this.db.list('streams');
  }
}
