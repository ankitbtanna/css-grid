import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridLayout2Component } from './grid-layout2/grid-layout2.component';

@NgModule({
  declarations: [AppComponent, GridLayout2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [GridLayout2Component],
})
export class AppModule {}
