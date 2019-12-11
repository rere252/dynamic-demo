import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'values',
  template: `
    <input type="number" [formControl]="valueControl" />
  `,
  // OnPush since we want our Angular apps to be performant +
  // it gives a chance to illustrate more problems.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValuesComponent implements OnInit {
  @Input() value: number;
  public valueControl: FormControl;

  constructor() {
    this.valueControl = new FormControl();
    this.valueControl.disable();
  }

  // If an input value was provided then it's now ready for use.
  ngOnInit() {
    this.valueControl.setValue(this.value);
  }
}
