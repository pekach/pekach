import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ch-stream",
  templateUrl: "./stream.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamComponent {
  constructor(protected activatedRoute: ActivatedRoute) {}
}
