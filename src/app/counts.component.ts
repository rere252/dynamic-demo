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
  @Input() @Dynamic<CountsComponent>() random: number;

  onValueChange() {
    // Since @HostBinding() for background color is used, the background
    // color would update without manually triggering the change detection.
    this.updateBackgroundColor();
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
