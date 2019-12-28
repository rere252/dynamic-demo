import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountsComponent } from './counts.component';
import { RandomizerDirective } from './randomizer.directive';

@NgModule({
  declarations: [AppComponent, CountsComponent, RandomizerDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
