import { LiveProvider } from './common.model';

export interface CyberGameProvider extends LiveProvider<'CyberGame'> {
    viewers: number;
}
