import { Provider, HashMap } from 'app/shared';

export interface FirebaseStream {
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
  providers: HashMap<boolean>;
}
