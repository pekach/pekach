import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Stream } from '../models';
import { STREAMS } from '../mocks';

@Injectable()
export class StreamService {
  getStreams(): Observable<Array<Stream>> {
    return Observable.of(STREAMS);
  }
}
