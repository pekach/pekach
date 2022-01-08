import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { States } from '@app/store';
import { Stream } from '@app/shared';
import { fetchStreams } from '@app/store/streams';

@Component({
  selector: 'ch-stream-list',
  templateUrl: './stream-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamListComponent implements OnInit {
  streams$: Observable<Array<Stream>>;

  constructor(private store: Store<States>) {
    this.streams$ = this.store
      .select('streams')
      .pipe(map((state) => state.streams));
  }

  ngOnInit(): void {
    this.store.dispatch(fetchStreams());
  }
}
