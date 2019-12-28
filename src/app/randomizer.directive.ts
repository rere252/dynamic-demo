import { Directive, OnDestroy, Host } from '@angular/core';
import { CountsComponent } from './counts.component';

@Directive({
  selector: '[randomizer]'
})
export class RandomizerDirective implements OnDestroy {
  private randomizer: any;

  constructor(
    // This makes it tightly coupled with the CountsComponent but
    // in a real app you could potentially inject a component using
    // the component's base class or maybe an element ref to
    // make the directive more general and less tightly coupled.
    @Host() private countsComponet: CountsComponent
  ) {
    this.randomizer = this.startRandomizing();
  }

  startRandomizing() {
    const randomize = () => {
      const rand = this.randInt();
      this.countsComponet.random = rand;
    };
    return setInterval(randomize, 1000);
  }

  private randInt() {
    return Math.floor(Math.random() * 100000);
  }

  ngOnDestroy() {
    clearTimeout(this.randomizer);
  }
}
