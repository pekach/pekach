import { NgModule } from "@angular/core";
import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from "@angular/material";

import { RootComponent } from "./root.component";

describe("RootComponent", () => {
  beforeEach(async(() => {
    const testingModule: NgModule = {
      declarations: [RootComponent],
      imports: [MaterialModule, RouterTestingModule.withRoutes([])],
    };

    TestBed.configureTestingModule(testingModule).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));
});
