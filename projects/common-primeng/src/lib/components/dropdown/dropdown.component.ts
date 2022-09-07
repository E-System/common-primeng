import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  OnInit, Optional,
  Output, QueryList,
  TemplateRef
} from '@angular/core';
import {CommonAngularModule, ErrorStateMatcher} from "es-common-angular";
import {InputTextModule} from "primeng/inputtext";
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgForm, ValidationErrors,
  Validator
} from "@angular/forms";
import {PrimeTemplate} from "primeng/api";
import {DropdownModule} from "primeng/dropdown";
import {RouterLinkWithHref} from "@angular/router";

@Component({
  selector: 'esp-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements ControlValueAccessor, Validator, OnInit, AfterContentInit {

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder = '';
  @Input() fullWidth = false;
  @Input() required = false;
  @Input() disabled: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() filter: boolean = false;
  @Input() filterBy: string  = '';
  @Input() errorText: string | null = null;
  @Input() style: any = {};
  @Input() viewMode: boolean = false;
  @Input() linkViewMode: string | null = null;
  @Input() info: string | null = null;
  @Input() selectFirst: boolean = true;
  @Input() options: any[] = [];
  @Input() optionLabel: string = 'name';
  @Input() optionValue: string = '';
  @Input() optionKey: string | null = null;
  @Input() appendTo: string | null = null;

  @Output('valueChange') emitterValue: EventEmitter<any> = new EventEmitter<any>();
  @Output('changeInput') emitterChange: EventEmitter<any> = new EventEmitter<any>();
  @Output('onChange') emitterOnChange: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(PrimeTemplate) templates: QueryList<any> | null = null;

  _value: any;
  _disabled = false;
  styleClass = {};
  formControl!: FormControl;
  selectedItemTemplate: TemplateRef<any> | null = null;
  itemTemplate: TemplateRef<any> | null = null;

  constructor(public ngControl: NgControl,
              @Optional() public parentFormDirective: FormGroupDirective,
              @Optional() public ngForm: NgForm,
              private errorStateMatcher: ErrorStateMatcher) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.formControl = this.ngControl.control as FormControl;
    });
    this.style['width'] = this.fullWidth ? '100%' : this.style['width'];
  }

  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'selectedItem':
          this.selectedItemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }

  get value() {
    return this._value;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required) {
      if (control.value && this.optionKey) {
        return control.value[this.optionKey] ? null : {empty: true};
      } else {
        return control.value ? null : {empty: true};
      }
    }
    return null;
  }

  set value(val: any) {
    this._value = val;
    if (this.selectFirst) {
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
  }

  innerOnTouched($event: FocusEvent) {
    this.formControl.markAsTouched({onlySelf: true});
    this.onTouched($event);
  }

  get isNotValid() {
    return this.errorStateMatcher.isErrorState(this.formControl, this.parentFormDirective || this.ngForm);
  }

  getValueLabel() {
    if (this.optionValue) {
      return this.options?.find(v => v[this.optionValue ? this.optionValue : 0] == this.value)?.[this.optionLabel];
    }
    return this.value?.[this.optionLabel];
  }

  onChangeValue($event: any) {
    this.onChange($event.value);
  }

  onModelChangeValue($event: any) {
    if (this.selectFirst) {
      this.onChange($event);
    }
  }

}

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonAngularModule,
    TooltipModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    RouterLinkWithHref
  ],
  exports: [DropdownComponent]
})
export class EspDropdownModule {
}
