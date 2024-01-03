import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceSelectComponent } from './race-select/race-select.component';
import { AbilityComponent } from './ability/ability.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceSelectComponent,
    AbilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
