import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Person } from './shared/interfaces/person';

@Component({
  imports: [Step2PersonTable, Step3PersonTableInput],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-introduction');
  // Step 1 One way Binding
  name: string = 'Mak';
  user = {
    firstname: 'Bob',
    lastname: 'Dylan',
    email: 'bob.dylan@aueb.gr',
  };

  person1: Person = {
    firstname: 'George',
    lastname: 'Harrison',
    email: 'george.harrison@aueb.gr',
  };

  person2: Person = {
    firstname: 'Lakis',
    lastname: 'Lalakis',
    email: 'lakis.lalakis@aueb.gr',
  };
}
