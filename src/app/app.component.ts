import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'ch-root',
  templateUrl: './app.component.html',
  styleUrls: ['../less/bootstrapper.css']
})
export class AppComponent {
  user: Observable<firebase.User>;

  constructor(protected afAuth: AngularFireAuth, protected db: AngularFireDatabase) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
