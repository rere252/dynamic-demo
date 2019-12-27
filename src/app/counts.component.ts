import { Component, ChangeDetectionStrategy, Input, HostBinding, OnInit } from '@angular/core';

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
export class CountsComponent implements OnInit {
  @HostBinding('style.background-color') backgroundColor: string;
  @Input() value: number;

  ngOnInit() {
    this.updateBackgroundColor();
  }

  updateBackgroundColor() {
    const blue = '#ACE7FF';
    const green = '#E7FFAC';
    this.backgroundColor = this.value % 2 === 0 ? blue : green;
  }
}
