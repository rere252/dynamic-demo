import { Component, ViewChild } from '@angular/core';
import { CountsComponent } from './counts.component';

@Component({
  selector: 'app-root',
  template: `
    <counts [value]="count"></counts>
    <br />
    <button (click)="incrementCount()">
      Increment AppComponent count
    </button>
  `
})
export class AppComponent {
  public count: number;
  @ViewChild(CountsComponent, { static: false }) countsComponent: CountsComponent;

  constructor() {
    this.count = 1;
  }

  incrementCount() {
    this.count += 1;
  }
}
