import { Providers } from './providers';

export interface ProviderUnresolvedRef { [id: string]: string };
export interface ProviderResolvedRef { [id: string]: Providers };
export type ProviderRefs = ProviderResolvedRef | ProviderUnresolvedRef;

export interface Stream {
  id: number;
  online: boolean;
  createdAt: number;
  updatedAt: number;
  lang: string;
  display_name: string;
  slug: string;
  logo: string;
  category: string;
  title: string;
  mature: boolean;
  thumbnail: string;
  providers: ProviderRefs;
}

export const streamDefaultFill = {
  lang: 'ru',
  display_name: 'Пекарь',
  slug: 'pekar',
  logo: 'assets/img/pekaanon.jpg',
  category: 'toxic waste',
  title: 'Anon ebani',
  mature: false,
  thumbnail: 'assets/img/pekatumb.jpg',
}

export const ProviderPriority: { [id: string]: number } =
  { 'Twitch': 1, 'GoodGame': 2, 'CyberGame': 3 };
