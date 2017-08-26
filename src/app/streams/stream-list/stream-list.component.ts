import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as StreamActions from '../../store/stream/stream.actions';

import { State, getStream } from '../../store';
import { StreamService } from '../../shared/services/stream.service';

@Component({
  selector: 'ch-stream-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stream-list.component.html',
  providers: [StreamService]
})
export class StreamListComponent {
  streams$: Observable<any>;

  constructor(private store: Store<State>) {
    this.streams$ = store.select(getStream)
      .map(state => state.streams);

    store.dispatch(new StreamActions.FetchStreamsAction());
  }
}
