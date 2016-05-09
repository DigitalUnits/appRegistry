import { Component } from '@angular/core';
import { DgunAppRegistryComponent } from './dgun-app-registry/dgun-app-registry.component';
import { DgunApplicationComponent } from './dgun-application/dgun-application.component';
import { DgunDeveloperComponent } from './dgun-developer/dgun-developer.component';

@Component({
  moduleId: module.id,
  selector: 'app-registry-app',
  templateUrl: 'app-registry.component.html',
  styleUrls: ['app-registry.component.css'],
  directives: [ DgunAppRegistryComponent,
                DgunApplicationComponent,
                DgunDeveloperComponent]
})
export class AppRegistryAppComponent {
  title = 'app-registry works!';
}
