import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Subscription } from 'rxjs/Subscription';

import {
    AngularFireDatabase,
    FirebaseListObservable,
    FirebaseObjectObservable,
} from 'angularfire2/database';

import {
    Providers,
    LiveProvider,
    Stream
} from '../models';

import { STREAMS } from '../mocks';

type Streams = Array<Stream>;

@Injectable()
export class StreamService {
    private keepAliveSub: Subscription;
    constructor(private db: AngularFireDatabase) {
    }
    Subscribe(): Observable<Streams> {
        const obs: Observable<Streams> = combineLatest(
            this.db.list('/streams', {
                query: {
                    orderByChild: 'published',
                    equalTo: true
                }
            }),
            this.db.list('/providers', {
                query: {
                    orderByChild: 'published',
                    equalTo: true
                }
            }),
            function(s: Streams, p: Array<Providers>): Streams {
                return s.map(function(stream: Stream): Stream {
                    for (const k in stream.providers) {
                        if (stream.providers.hasOwnProperty(k)) {
                            const provider: Providers =
                                p.find((prov: Providers) =>
                                    `${prov.source}${prov.id}` === k)
                            if (provider && provider.published) {
                                stream.providers[k] = provider;
                                switch (provider.kind) {
                                    case 'LiveStream': if (provider.online) {
                                        stream.online = true
                                    };
                                }
                            }
                        }
                    }
                    return stream
                });
            });
        if (!this.keepAliveSub || this.keepAliveSub.closed) {
            this.keepAliveSub = obs.subscribe();
        }
        return obs;
    }
}
