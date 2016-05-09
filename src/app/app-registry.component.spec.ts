import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppRegistryAppComponent } from '../app/app-registry.component';

beforeEachProviders(() => [AppRegistryAppComponent]);

describe('App: AppRegistry', () => {
  it('should create the app',
      inject([AppRegistryAppComponent], (app: AppRegistryAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app-registry works!\'',
      inject([AppRegistryAppComponent], (app: AppRegistryAppComponent) => {
    expect(app.title).toEqual('app-registry works!');
  }));
});
