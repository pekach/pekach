import { Stream } from './stream.model';

export interface StreamReq {
    channels: { [index: number]: Stream };
}
