import { Component } from '@angular/core';
import { DgunAppRegistryComponent } from './dgun-app-registry/dgun-app-registry.component';

@Component({
  moduleId: module.id,
  selector: 'app-registry-app',
  templateUrl: 'app-registry.component.html',
  styleUrls: ['app-registry.component.css'],
  directives: [ DgunAppRegistryComponent ]
})
export class AppRegistryAppComponent {
  title = 'app-registry works!';
}
