import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ch-stream-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stream-list.component.html'
})
export class StreamListComponent {
  streams: Array<string> = [
    'singollo',
    'singollo-1',
    'singollo-2',
    'singollo-3',
    'singollo-4'
  ];
}
