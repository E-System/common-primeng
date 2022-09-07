import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ERROR_STATE_MATCHER_CONFIG, ErrorStateMatcher, StateMatcher} from "es-common-angular";
import {EspCommonTableModule} from "common-primeng";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EspCommonTableModule,
    FormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ErrorStateMatcher},
    {provide: ERROR_STATE_MATCHER_CONFIG, useValue: [StateMatcher.SUBMITTED]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
