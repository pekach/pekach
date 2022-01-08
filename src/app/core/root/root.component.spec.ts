import { NgModule } from '@angular/core';
import { TestBed, async, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { RootComponent } from './root.component';

describe('RootComponent', () => {
  beforeEach(
    waitForAsync(() => {
      const testingModule: NgModule = {
        declarations: [RootComponent],
        imports: [
          MatButtonModule,
          MatToolbarModule,
          MatIconModule,
          MatMenuModule,
          MatButtonToggleModule,
          RouterTestingModule.withRoutes([]),
        ],
      };

      TestBed.configureTestingModule(testingModule).compileComponents();
    })
  );

  it(
    'should create the app',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(RootComponent);
      const app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
    })
  );
});
