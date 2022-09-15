import {Component, EventEmitter, forwardRef, Input, NgModule, OnInit, Optional, Output} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  FormsModule, NG_VALUE_ACCESSOR,
  NgControl,
  NgForm
} from "@angular/forms";
import {CommonAngularModule, ErrorStateMatcher} from "es-common-angular";
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";
import {RouterLinkWithHref} from "@angular/router";
import {InputMaskModule} from "primeng/inputmask";
import {BaseElementComponent, EspBaseComponentModule} from "../base-element/base-element.component";

@Component({
  selector: 'esp-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss']
})
export class InputMaskComponent extends BaseElementComponent implements OnInit {

  @Input() mask: string = '';

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
}

@NgModule({
  declarations: [
    InputMaskComponent
  ],
  imports: [
    CommonAngularModule,
    TooltipModule,
    CommonModule,
    FormsModule,
    InputMaskModule,
    RouterLinkWithHref,
    EspBaseComponentModule
  ],
  exports: [InputMaskComponent]
})
export class EspInputMaskModule {
}
