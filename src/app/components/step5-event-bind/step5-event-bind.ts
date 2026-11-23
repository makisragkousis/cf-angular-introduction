import { Component, ɵresetIncrementalHydrationRuntimeForTests } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-step5-event-bind',
  styleUrl: './step5-event-bind.css',
  templateUrl: './step5-event-bind.html',
})
export class Step5EventBind {
  times: number = 0;

  incrementTimes() {
    this.times++;
  }

  decrementTimes() {
    this.times--;
  }
}
