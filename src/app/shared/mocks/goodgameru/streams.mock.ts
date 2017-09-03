import { Stream, StreamReq } from '../../../shared/models/goodgameru';
import { RAW_STREAMS } from './data/streams.json';
RAW_STREAMS.channels
export const GOODGAMERU_STREAMS: Array<Stream> =
    Array.from(Object.keys(RAW_STREAMS.channels).map(
        (key) => RAW_STREAMS.channels[key]))
