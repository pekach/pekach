import { GoodGameProvider } from './GoodGame.model';
import { TwitchProvider } from './Twitch.model';
import { CyberGameProvider } from './CyberGame.model';
import { LiveProvider, Provider } from './common.model';

export { GoodGameProvider } from './GoodGame.model';
export { TwitchProvider } from './Twitch.model';
export { CyberGameProvider } from './CyberGame.model';
export { LiveProvider, Provider } from './common.model';

export type LiveProviders =
    GoodGameProvider |
    TwitchProvider |
    CyberGameProvider;

export type Providers = LiveProvider<LiveProviders['source']>
