import { LiveProvider } from './common.model';

export interface TwitchProvider extends LiveProvider<'Twitch'> {
  game: string;
  lang: string;
  logo: string;
  mature: boolean;
  title: string;
  viewers: number;
}
