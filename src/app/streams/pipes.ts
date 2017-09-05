import { Pipe, PipeTransform } from '@angular/core';

import {
    Stream,
    GoodGameProvider,
    TwitchProvider,
    CyberGameProvider,
    Providers,
    ProviderResolvedRef,
    ProviderRefs,
    ProviderPriority,
    streamDefaultFill
} from 'app/shared';

@Pipe({
    name: 'fmtStreams',
    pure: true
})

export class FmtStreamsPipeComponent implements PipeTransform {

    transform(streams: Array<Stream>) {
        return streams
            .map(function(stream) {
                stream = Object.assign({}, stream);
                if (stream.providers) {
                    const sP: ProviderRefs = stream.providers;
                    stream.providers =
                        Object.keys(stream.providers)
                            .filter((v) => (stream.providers[v] as Providers).source)
                            .sort((a, b) =>
                                ProviderPriority[(sP[a] as Providers).source] -
                                ProviderPriority[(sP[b] as Providers).source])
                            .map((k: string) => [k, stream.providers[k] as Providers])
                            .reduce(
                            function(prs, n: [string, Providers]): ProviderResolvedRef {
                                prs[n[0]] = n[1];
                                return prs;
                            }, {}) as ProviderResolvedRef;
                }

                return Object.keys(streamDefaultFill)
                    .reduce(function(s: Stream, sk: string): Stream {
                        s[sk] = s[sk] || Object.keys(s.providers)
                            .reduce(
                            function(v: any, pk: string): any {
                                v[sk] = s.providers[pk][sk] || v[sk];
                                return v;
                            }
                            , Object.assign({}, streamDefaultFill))[sk];
                        return s;
                    }, stream)
            })
    }
}
