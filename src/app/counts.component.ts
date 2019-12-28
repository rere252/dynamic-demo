import { Component, ChangeDetectionStrategy, Input, HostBinding, ChangeDetectorRef } from '@angular/core';
import { Dynamic } from './dynamic.decorator';

@Component({
  selector: 'counts',
  template: `
    CountsComponent <br />
    Value: {{ value }} <br />
    Random: {{ random }}
  `,
  // OnPush since we want our Angular apps to be performant +
  // it gives a chance to illustrate more problems.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountsComponent {
  @HostBinding('style.background-color') backgroundColor: string;
  @Input() @Dynamic<CountsComponent>('onValueChange') value: number;
  @Input() @Dynamic<CountsComponent>('onRandomChange') random: number;

  constructor(private cdr: ChangeDetectorRef) {}

  onValueChange() {
    // Since @HostBinding() for background color is used, the background
    // color would update without manually triggering the change detection.
    this.updateBackgroundColor();
    // In order to update the value displayed in the component we still
    // need to manually request change detection.
    this.cdr.markForCheck();
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

  // Previous and current values are provided if you want to use them.
  onRandomChange(previousValue: number, newValue: number) {
    console.log(`previousValue: ${previousValue}; newValue: ${newValue}`);
    this.cdr.markForCheck();
  }
}
