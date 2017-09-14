export interface Provider<S> {
  source: S;
  id: number;
  url: string;
  slug: string;
  published: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface LiveProvider<S> extends Provider<S> {
  kind: 'LiveStream';
  online: boolean;
}
