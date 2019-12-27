import { Component, ChangeDetectionStrategy, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'counts',
  template: `
    CountsComponent <br />
    Value: {{ value }}
  `,
  // OnPush since we want our Angular apps to be performant +
  // it gives a chance to illustrate more problems.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountsComponent implements OnChanges {
  @HostBinding('style.background-color') backgroundColor: string;
  @Input() value: number;

  ngOnChanges(changes: SimpleChanges) {
    // In a real app there could potentially exist multiple @Input() properties
    // and they all share the same lifecycle hook. Ideally you'd want to pick out
    // the individual property changes and only react to changes that actually happened.
    const valueChange = changes['value'];
    // If no change occured then valueChanges will be undefined.
    if (valueChange) {
      this.updateBackgroundColor();
    }
  }

  /**
   * I know this method could simply be replaced with a template expression.
   * This is just for demo purposes. In a real app you could trigger network
   * calls etc here instead.
   */
  updateBackgroundColor() {
    const blue = '#ACE7FF';
    const green = '#E7FFAC';
    this.backgroundColor = this.value % 2 === 0 ? blue : green;
  }
}
