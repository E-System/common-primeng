import {Component, ElementRef, EventEmitter, Input, NgModule, OnInit, Optional, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroupDirective, FormsModule, NgControl, NgForm} from "@angular/forms";
import {CommonAngularModule, ErrorStateMatcher} from "es-common-angular";
import {InputTextModule} from "primeng/inputtext";
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'esp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @ViewChild('inputElement') inputElement: ElementRef | null = null;
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() placeholder = '';
  @Input() fullWidth = false;
  @Input() required = false;
  @Input() disabled: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() iconPosition: string = 'right';
  @Input() icon: string | null = null;
  @Input() errorText: string | null = null;
  @Input() viewMode: boolean = false;
  @Input() info: string | null = null;
  @Input() blockEditBefore: number | null = null;

  @Output('valueChange') emitterValue: EventEmitter<any> = new EventEmitter<any>();
  @Output('changeInput') emitterChange: EventEmitter<any> = new EventEmitter<any>();

  oldValue: any;
  _value: any;
  _disabled = false;
  style: any = {};
  styleClass = {};
  formControl!: FormControl;


  constructor(private ngControl: NgControl,
              @Optional() private parentFormDirective: FormGroupDirective,
              @Optional() private ngForm: NgForm,
              private errorStateMatcher: ErrorStateMatcher) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }

  get value() {
    return this._value;
  }

  @Input()
  set value(val: string) {
    if (this.blockEditBefore && this.inputElement && this.inputElement.nativeElement.selectionStart < this.blockEditBefore) {
      this._value = this.oldValue;
      this.inputElement.nativeElement.value = this.oldValue;
      this.onChange(this._value);
      return;
    } else {
      this._value = val;
      this.oldValue = this._value;
      this.onChange(val);
    }
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
    this.oldValue = this._value;
  }

  innerOnTouched($event: FocusEvent) {
    this.formControl.markAsTouched({onlySelf: true});
    this.onTouched($event);
  }

  get isNotValid() {
    return this.errorStateMatcher.isErrorState(this.formControl, this.parentFormDirective || this.ngForm);
  }
}

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonAngularModule,
    InputTextModule,
    TooltipModule,
    CommonModule,
    FormsModule
  ],
  exports: [InputComponent]
})
export class EspInputModule {
}

