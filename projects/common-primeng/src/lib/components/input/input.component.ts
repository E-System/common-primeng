import {Component, ElementRef, Input, NgModule, OnInit, Optional, ViewChild} from '@angular/core';
import {ControlContainer, FormGroupDirective, FormsModule, NgControl, NgForm} from "@angular/forms";
import {CommonAngularModule, ErrorStateMatcher} from "es-common-angular";
import {InputTextModule} from "primeng/inputtext";
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";
import {BaseElementComponent, EspBaseComponentModule} from "../base-element/base-element.component";

@Component({
  selector: 'esp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseElementComponent implements OnInit {

  @ViewChild('inputElement') inputElement: ElementRef | null = null;

  @Input() type: string = 'text';

  @Input() iconPosition: string = 'right';

  @Input() icon: string | null = null;

  @Input() blockEditBefore: number | null = null;

  oldValue: any;


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

  @Input()
  override set value(val: string) {
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

  override writeValue(value: any): void {
    this._value = value;
    this.oldValue = this._value;
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
    FormsModule,
    EspBaseComponentModule
  ],
  exports: [InputComponent]
})
export class EspInputModule {
}

