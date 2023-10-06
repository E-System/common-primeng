import {Component, EventEmitter, Input, NgModule, OnInit, Optional, Output} from '@angular/core';
import {ControlContainer, FormGroupDirective, FormsModule, NgControl, NgForm} from "@angular/forms";
import {CommonAngularModule, ErrorStateMatcher} from "es-common-angular";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {CalendarModule} from "primeng/calendar";
import {BaseElementComponent, EspBaseComponentModule} from "../base-element/base-element.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'esp-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent extends BaseElementComponent implements OnInit {

  @Input() dateFormat: string = 'mm/dd/yy';

  @Input() dateFormatViewMode: string = 'MM/dd/yyyy';

  @Input() appendTo: string | null = null;

  @Input() showIcon: boolean = false;

  @Output('onSelect') emitterSelect: EventEmitter<any> = new EventEmitter<any>();


  constructor(@Optional() protected override controlContainer: ControlContainer,
              @Optional() protected override parentFormDirective: FormGroupDirective,
              @Optional() protected override ngForm: NgForm,
              protected override ngControl: NgControl,
              protected override errorStateMatcher: ErrorStateMatcher) {
    super(controlContainer, parentFormDirective, ngForm, ngControl, errorStateMatcher);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  onSelect($event: any) {
    this.emitterSelect.emit($event)
  }
}

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonAngularModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CalendarModule,
    RouterLink,
    EspBaseComponentModule
  ],
  exports: [CalendarComponent]
})
export class EspCalendarModule {
}
