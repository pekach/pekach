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
    colorThemes = ['peka-light-theme', 'peka-dark-theme'];

    public toggleColorTheme() {
        // В ЖСике даже нет rotate() на массивах T_T
        this.colorThemes = this.colorThemes.reverse();
    }

    get colorThemeClass(): string {
        return this.colorThemes[0];
    }

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
