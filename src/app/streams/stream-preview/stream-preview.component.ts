import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Stream, Provider, PROVIDER_PRIORITY } from 'app/shared';

@Component({
  selector: 'ch-stream-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stream-preview.component.html'
})
export class StreamPreviewComponent {
  @Input() stream: Stream;

  get live(): boolean {
    return this.stream.providers
      .some((provider: Provider) => provider.published && provider.online);
  }

  get logo(): string {
    const provider = this.stream.providers.find(p => !!p.logo);

    return provider
      ? provider.logo
      : '/assets/img/pekaanon.jpg';
  }

  get thumbnail(): string {
    const provider = this.stream.providers.find(p => !!p.thumbnail);

    return provider
      ? provider.thumbnail
      : '/assets/img/pekatumb.jpg';
  }

  get title(): string {
    const provider = this.stream.providers.find(p => !!p.title);

    return provider
      ? provider.title
      : this.stream.title;
  }

  get category(): string {
    const provider = this.stream.providers.find(p => !!p.category);
    return provider
      ? provider.category
      : this.stream.category;
  }
}
