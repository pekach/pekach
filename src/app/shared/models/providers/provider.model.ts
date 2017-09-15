import { ProviderType } from './provider.types';

export interface Provider {
  id: number;
  url: string;
  source: ProviderType;
  slug: string;
  published: boolean;
  createdAt: number;
  updatedAt: number;
  viewers: number;
  description: string;
  game: string;
  title: string;
  img: string;
  thumbnail: string;
  lang: string;
  logo: string;
  mature: boolean;
  online: boolean;
}
