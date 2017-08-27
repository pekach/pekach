import { Provider } from './provider.model';

export interface Stream {
  id: string;
  slug: string;
  category: string;
  thumbnail: string;
  startedAt: number;
  players: Array<Provider>;
}
