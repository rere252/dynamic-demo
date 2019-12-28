import { Component, ViewChild } from '@angular/core';
import { CountsComponent } from './counts.component';

@Component({
  selector: 'app-root',
  template: `
    <counts [value]="count" randomizer></counts>
    <br />
    <button (click)="incrementCount()">
      Increment AppComponent count
    </button>
    <button (click)="incrementValue()">
      Increment value directly
    </button>
  `
})
export class AppComponent {
  public count: number;
  @ViewChild(CountsComponent, { static: true }) countsComponent: CountsComponent;

  constructor() {
    this.count = 1;
  }

  incrementCount() {
    this.count += 1;
  }

  incrementValue() {
    this.countsComponent.value += 1;
  }
}
