import { Observable } from 'rxjs/Observable';
import { Stream } from 'app/shared/models';

export abstract class StreamService {
  abstract Subscribe(): Observable<Array<Stream>>;
}
