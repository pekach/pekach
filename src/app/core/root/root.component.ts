import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'ch-root',
  templateUrl: './root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {
  colorThemes = ['peka-light-theme', 'peka-dark-theme'];

  toggleColorTheme() {
    // В ЖСике даже нет rotate() на массивах T_T
    this.colorThemes = this.colorThemes.reverse();
  }

  get colorThemeClass(): string {
    return this.colorThemes[0];
  }

  constructor(protected router: Router, private titleService: Title) {}
}
