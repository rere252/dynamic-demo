import { Component, ViewChild } from '@angular/core';
import { CountsComponent } from './counts.component';

@Component({
  selector: 'app-root',
  template: `
    <counts [(value)]="count"></counts>
    <br />
    <button (click)="addOne()">
      Add one
    </button>
    <button (click)="addOneProgrammatically()">
      Add one programmatically
    </button>
  `
})
export class AppComponent {
  public count: number;
  @ViewChild(CountsComponent, { static: false }) countsComponent: CountsComponent;

  constructor() {
    this.count = 1;
  }

  addOne() {
    this.count += 1;
  }

  addOneProgrammatically() {
    this.countsComponent.value += 1;
  }
}
