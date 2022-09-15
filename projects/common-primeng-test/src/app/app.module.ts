import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ERROR_STATE_MATCHER_CONFIG, ErrorStateMatcher, StateMatcher} from "es-common-angular";
import {EspCommonTableModule} from "common-primeng";
import {EspCalendarModule} from "../../../common-primeng/src/lib/components/calendar/calendar.component";
import {EspChipsModule} from "../../../common-primeng/src/lib/components/chips/chips.component";
import {EspDropdownModule} from "../../../common-primeng/src/lib/components/dropdown/dropdown.component";
import {EspInputModule} from "../../../common-primeng/src/lib/components/input/input.component";
import {EspInputNumberModule} from "../../../common-primeng/src/lib/components/input-number/input-number.component";
import {EspInputMaskModule} from "../../../common-primeng/src/lib/components/input-mask/input-mask.component";
import {EspTextareaModule} from "../../../common-primeng/src/lib/components/textarea/textarea.component";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {SharedModule} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EspCommonTableModule,
    EspCalendarModule,
    EspChipsModule,
    EspDropdownModule,
    EspInputModule,
    EspInputMaskModule,
    EspInputNumberModule,
    EspTextareaModule,
    EspCommonTableModule,
    FormsModule,
    InputMaskModule,
    InputNumberModule,
    SharedModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ErrorStateMatcher},
    {provide: ERROR_STATE_MATCHER_CONFIG, useValue: [StateMatcher.SUBMITTED]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
