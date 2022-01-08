import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';

import { PROVIDER_PRIORITY } from '@app/shared/constants';
import { Provider, Stream } from '@app/shared/models';

import { FirebaseStream } from './firebase-stream.model';

@Injectable({ providedIn: 'root' })
export class FirebaseStreamService {
  subscribe(): Observable<Array<Stream>> {
    /*
    const streams$ = this.db.list("/streams", {
      query: {
        orderByChild: "published",
        equalTo: true,
      },
    });

    const providers$ = this.db.list("/providers", {
      query: {
        orderByChild: "published",
        equalTo: true,
      },
    });

    const obs: Observable<Array<Stream>> = combineLatest(
      streams$,
      providers$,
      (streams: Array<FirebaseStream>, providers: Array<Provider>) =>
        streams.map((stream) => this.mapStream(stream, providers))
    );

    if (!this.keepAliveSub || this.keepAliveSub.closed) {
      this.keepAliveSub = obs.subscribe();
    }

    */

    return of([]);
  }

  private mapStream(
    stream: FirebaseStream,
    providers: Array<Provider>
  ): Stream {
    const items = providers
      .filter((p) => stream.providers.hasOwnProperty(p.source + ':' + p.slug))
      .sort((a, b) => this.sortByProviderPriority(a, b));

    return {
      id: stream.id,
      online: stream.online,
      createdAt: stream.createdAt,
      updatedAt: stream.updatedAt,
      lang: stream.lang,
      displayName: stream.display_name,
      slug: stream.slug,
      logo: stream.logo,
      category: stream.category,
      title: stream.title,
      mature: stream.mature,
      thumbnail: stream.thumbnail,
      providers: items,
    };
  }

  private sortByProviderPriority(a: Provider, b: Provider) {
    return PROVIDER_PRIORITY[a.source] - PROVIDER_PRIORITY[b.source];
  }

  constructor(/* private db: AngularFireDatabase */) {}
}
