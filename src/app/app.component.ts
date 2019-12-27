import { Component } from '@angular/core';

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

  constructor() {
    this.count = 1;
  }

  incrementCount() {
    this.count += 1;
  }
}
