import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Stream } from '../models/stream.model';
import { STREAMS } from '../../mocks/streams.mock';

@Injectable()
export class StreamService {
  getStreams(): Observable<Array<Stream>> {
    return Observable.of(STREAMS);
  }
}
