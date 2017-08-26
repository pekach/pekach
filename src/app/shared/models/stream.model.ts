import { Provider } from './provider.model';

export interface Stream {
  id: string;
  category: string;
  thumbnail: string;
  startedAt: number;
  players: Array<Provider>;
}
