import { LiveProvider } from './common.model';

export interface GoodGameProvider extends LiveProvider<'GoodGame'> {
  description: string;
  game: string;
  title: string;
  img: string;
  thumbnail: string;
  viewers: number;
}
