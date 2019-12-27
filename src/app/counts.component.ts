import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'counts',
  template: `
    <input type="number" [formControl]="valueControl" />
  `,
  // OnPush since we want our Angular apps to be performant +
  // it gives a chance to illustrate more problems.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountsComponent implements OnChanges {
  @Input() value: number;
  public valueControl: FormControl;

  constructor() {
    this.valueControl = new FormControl();
    this.valueControl.disable();
  }

  ngOnChanges(changes: SimpleChanges) {
    const valueChange = changes['value'];
    if (valueChange) {
      this.valueControl.setValue(this.value);
    }
  }
}
