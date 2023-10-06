import {Component, EventEmitter, Input, NgModule, OnInit, Optional, Output} from '@angular/core';
import {CommonAngularModule, ErrorStateMatcher} from "es-common-angular";
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgForm
} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {InputNumberModule} from "primeng/inputnumber";
import {BaseElementComponent, EspBaseComponentModule} from "../base-element/base-element.component";

@Component({
  selector: 'esp-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent extends BaseElementComponent implements ControlValueAccessor, OnInit {

  @Input() showButtons: boolean = false;

  @Input() step: number = 1;

  @Input() min: number = -Infinity;

  @Input() max: number = Infinity;

  @Input() maxlength: number = 0;

  @Input() mode: string = '';

  @Input() currency: string = '';

  @Input() multiplier: number | null = null;

  @Input() locale: string = 'en';

  @Input() prefix: string = '';

  @Input() suffix: string = '';

  @Input() minFractionDigits: number = 0;

  @Input() maxFractionDigits: number = 0;


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

  override writeValue(value: any): void {
    if (this.multiplier) {
      if (value) {
        this._value = value / this.multiplier;
      } else {
        this._value = value
      }
    } else {
      this._value = value;
    }
  }

  changeValue($event: any) {
    if (this.multiplier && $event) {
      this.onChange($event * this.multiplier);
    } else {
      this.onChange($event);
    }
  }
}

@NgModule({
  declarations: [
    InputNumberComponent
  ],
  imports: [
    CommonAngularModule,
    TooltipModule,
    CommonModule,
    FormsModule,
    InputNumberModule,
    RouterLink,
    EspBaseComponentModule
  ],
  exports: [InputNumberComponent]
})
export class EspInputNumberModule {
}
