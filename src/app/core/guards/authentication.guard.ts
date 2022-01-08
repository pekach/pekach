import { Injectable } from "@angular/core";
import { map, Observable, take, tap } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";

import {
  Router,
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.authState.pipe(
      take(1),
      map((authState) => !!authState),
      tap((auth) => (!auth ? this.router.navigate(["/login"]) : true))
    );
  }

  constructor(protected router: Router, private auth: AngularFireAuth) {}
}
