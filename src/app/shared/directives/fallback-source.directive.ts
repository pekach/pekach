import { Directive, OnDestroy, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[chFallback]'
})
export class FallbackSourceDirective implements OnDestroy {
  @Input() chFallback: string;

  protected nativeElement: HTMLElement;
  protected onErrorListenerFn: Function;

  onError() {
    if (this.chFallback !== this.nativeElement.getAttribute('src')) {
      this.nativeElement.setAttribute('src', this.chFallback);
    }
  }

  ngOnDestroy() {
    this.onErrorListenerFn();
  }

  constructor(el: ElementRef, protected renderer: Renderer2) {
    this.nativeElement = el.nativeElement;

    this.onErrorListenerFn = this.renderer.listen(el.nativeElement, 'error', (evt) => this.onError());
  }
}
