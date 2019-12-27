import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <counts [value]="count"></counts>
    <br />
    <button (click)="addOne()">
      Add one
    </button>
  `
})
export class AppComponent {
  public count: number;

  constructor() {
    this.count = 1;
  }

  addOne() {
    this.count += 1;
  }
}
