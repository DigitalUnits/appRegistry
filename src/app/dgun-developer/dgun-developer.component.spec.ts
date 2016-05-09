import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DgunDeveloperComponent } from './dgun-developer.component';

describe('Component: DgunDeveloper', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DgunDeveloperComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DgunDeveloperComponent],
      (component: DgunDeveloperComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DgunDeveloperComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DgunDeveloperComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-dgun-developer></app-dgun-developer>
  `,
  directives: [DgunDeveloperComponent]
})
class DgunDeveloperComponentTestController {
}

