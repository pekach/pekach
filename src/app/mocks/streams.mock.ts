import { Stream } from '../shared/models/stream.model';

export const singollo: Stream = {
  id: '1',
  category: 'games',
  thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_savokgearsuperstar-320x180.jpg',
  startedAt: 0,
  players: [
    {
      id: 'twitch.tv',
      online: true,
      channel: 'singollo'
    }
  ]
};

export const STREAMS: Array<Stream> = [singollo];
