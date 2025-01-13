import {Component, EventEmitter, Input, OnInit, Optional, Output} from '@angular/core';
import {ControlContainer, FormGroupDirective, FormsModule, NgControl, NgForm} from "@angular/forms";
import {ErrorStateMatcher} from "es-common-angular";
import {DatePipe, NgClass, NgIf} from "@angular/common";
import {Calendar} from "primeng/calendar";
import {BaseElementComponent} from "../base-element/base-element.component";

@Component({
  selector: 'esp-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [
    FormsModule,
    Calendar,
    NgIf,
    DatePipe,
    NgClass,
    BaseElementComponent
  ]
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
