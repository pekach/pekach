import { Provider } from "./providers";

export interface Stream {
  id: number;
  online: boolean;
  createdAt: number;
  updatedAt: number;
  lang: string;
  displayName: string;
  slug: string;
  logo: string;
  category: string;
  title: string;
  mature: boolean;
  thumbnail: string;
  providers: Array<Provider>;
}
