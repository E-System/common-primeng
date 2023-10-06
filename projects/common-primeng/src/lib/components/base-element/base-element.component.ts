import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Optional,
  Output,
  QueryList
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgForm
} from "@angular/forms";
import {CommonAngularModule, ErrorStateMatcher} from "es-common-angular";
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'esp-base-element',
  templateUrl: './base-element.component.html',
  styleUrls: ['./base-element.component.css']
})
export class BaseElementComponent implements ControlValueAccessor, OnInit {

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder = '';
  @Input() fullWidth = false;
  @Input() required = false;
  @Input() disabled: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() errorText: string | null = null;
  @Input() viewMode: boolean = false;
  @Input() info: string | null = null;
  @Input() textAlign: 'LEFT' | 'CENTER' | 'RIGHT' | null = null;

  // @Output('valueChange') emitterValue: EventEmitter<any> = new EventEmitter<any>();
  // @Output('changeInput') emitterChange: EventEmitter<any> = new EventEmitter<any>();

  _value: any;
  _disabled = false;
  style: any = {};
  styleClass = {};
  formControl!: FormControl;
  lastChildForm: FormGroupDirective | NgForm | null = null;


  constructor(@Optional() protected controlContainer: ControlContainer,
              @Optional() protected parentFormDirective: FormGroupDirective,
              @Optional() protected ngForm: NgForm,
              protected ngControl: NgControl,
              protected errorStateMatcher: ErrorStateMatcher) {
    this.ngControl.valueAccessor = this;
    if (controlContainer == ngForm) {
      this.lastChildForm = ngForm;
    }
    if (controlContainer == parentFormDirective) {
      this.lastChildForm = parentFormDirective;
    }
  }

  ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }

  get value() {
    return this._value;
  }

  @Input()
  set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  onChange(_: any) {
  }

  onTouched(_: any) {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this._value = value;
  }

  innerOnTouched($event: FocusEvent) {
    this.formControl.markAsTouched({onlySelf: true});
    this.onTouched($event);
  }

  get isNotValid() {
    return this.errorStateMatcher.isErrorState(this.formControl, this.lastChildForm);
  }
}

@NgModule({
  declarations: [
    BaseElementComponent
  ],
  imports: [
    CommonAngularModule,
    TooltipModule,
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports: [
    BaseElementComponent
  ]
})
export class EspBaseComponentModule {
}
