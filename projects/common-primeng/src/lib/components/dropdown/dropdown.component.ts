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
  AbstractControl, ControlContainer,
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
import {BaseElementComponent, EspBaseComponentModule} from "../base-element/base-element.component";

@Component({
  selector: 'esp-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends BaseElementComponent implements Validator, OnInit, AfterContentInit {


  @Input() filter: boolean = false;

  @Input() filterBy: string  = '';

  @Input() linkViewMode: string | null = null;

  @Input() selectFirst: boolean = true;

  @Input() options: any[] = [];

  @Input() optionLabel: string = 'name';

  @Input() optionValue: string = '';

  @Input() optionKey: string | null = null;

  @Input() appendTo: string | null = null;

  @Output('onChange') emitterOnChange: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(PrimeTemplate) templates: QueryList<any> | null = null;

  selectedItemTemplate: TemplateRef<any> | null = null;

  itemTemplate: TemplateRef<any> | null = null;

  constructor(@Optional() protected override controlContainer: ControlContainer,
              @Optional() protected override parentFormDirective: FormGroupDirective,
              @Optional() protected override ngForm: NgForm,
              protected override ngControl: NgControl,
              protected override errorStateMatcher: ErrorStateMatcher) {
    super(controlContainer, parentFormDirective, ngForm, ngControl, errorStateMatcher);
  }

  override ngOnInit(): void {
    super.ngOnInit();
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

  override set value(val: any) {
    this._value = val;
    if (this.selectFirst) {
      this.onChange(val);
    }
  }

  get textValue() {
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
    RouterLinkWithHref,
    EspBaseComponentModule
  ],
  exports: [DropdownComponent]
})
export class EspDropdownModule {
}
