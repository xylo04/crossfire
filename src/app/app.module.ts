import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSliderModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {AppNavComponent} from './app-nav/app-nav.component';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
