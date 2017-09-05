import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { States, Actions } from 'app/states';
import { Stream } from 'app/shared';

@Component({
    selector: 'ch-stream-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './stream-list.component.html'
})
export class StreamListComponent {
    streams$: Observable<Array<Stream>>;

    constructor(private store: Store<States>) {
        this.streams$ = this.store
            .select('streams')
            .map(state => state.streams);

        this.store.dispatch(new Actions.Streams.FetchStreamsAction());
    }
}
