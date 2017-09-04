import { Stream } from '../../shared';

export const singollo: Stream = {
  id: '1',
  slug: 'singollo',
  category: 'games',
  thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_savokgearsuperstar-320x180.jpg',
  startedAt: 0,
  players: [
    {
      type: 'twitch.tv',
      channel: 'singollo',
      online: true
    }
  ]
};

export const STREAMS: Array<Stream> = [singollo];
