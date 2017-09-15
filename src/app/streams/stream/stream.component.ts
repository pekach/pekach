import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ch-stream',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stream.component.html'
})
export class StreamComponent implements OnInit {
  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => console.log(params['key'])); switch map for this
    // console.log(this.activatedRoute.snapshot);
  }

  constructor(protected activatedRoute: ActivatedRoute) { }
}
