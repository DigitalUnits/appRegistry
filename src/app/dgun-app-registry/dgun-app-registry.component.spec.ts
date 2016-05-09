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
import { DgunAppRegistryComponent } from './dgun-app-registry.component';

describe('Component: DgunAppRegistry', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DgunAppRegistryComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DgunAppRegistryComponent],
      (component: DgunAppRegistryComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DgunAppRegistryComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DgunAppRegistryComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-dgun-app-registry></app-dgun-app-registry>
  `,
  directives: [DgunAppRegistryComponent]
})
class DgunAppRegistryComponentTestController {
}

