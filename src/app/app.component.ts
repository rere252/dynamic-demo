import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <values [value]="value"></values>
    <br />
    <button (click)="addOne()">
      Add one
    </button>
  `
})
export class AppComponent {
  public value: number;

  constructor() {
    this.value = 1;
  }

  addOne() {
    this.value += 1;
  }
}
