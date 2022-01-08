import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Stream } from '@app/shared';
import { fetchStreams, selectStreams } from '@app/store/streams';

@Component({
  selector: 'ch-stream-list',
  templateUrl: './stream-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamListComponent implements OnInit {
  streams$: Observable<Array<Stream>>;

  constructor(private store: Store) {
    this.streams$ = this.store.select(selectStreams);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchStreams());
  }
}
