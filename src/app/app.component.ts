import 'rxjs/add/operator/filter';

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'ch-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['../less/bootstrapper.less']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((e) => console.log(e));
  }

  constructor(
    protected afAuth: AngularFireAuth,
    protected db: AngularFireDatabase,
    protected router: Router,
    private titleService: Title
  ) {
    this.user = afAuth.authState;
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
