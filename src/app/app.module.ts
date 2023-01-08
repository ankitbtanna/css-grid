import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { GridLayout3Component } from './grid-layout3/grid-layout3.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, GridLayout3Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [GridLayout3Component],
})
export class AppModule {}
