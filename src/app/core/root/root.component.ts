import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

// import * as firebase from 'firebase/app';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'ch-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './root.component.html',
  styleUrls: []
})
export class RootComponent implements OnInit {
  // user: Observable<firebase.User>;

  ngOnInit() {
    /*
      this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((e) => console.log(e));
    */
  }

  constructor(
    /* protected afAuth: AngularFireAuth,
       protected db: AngularFireDatabase, */
    protected router: Router,
    private titleService: Title
  ) {
    // this.user = afAuth.authState;

    // const values = this.db.list('streams');

    // (window as any).vls = this.db.list('streams');
  }

  /*
    login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
    this.afAuth.auth.signOut();
    }
  */
}
