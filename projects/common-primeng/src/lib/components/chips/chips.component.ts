import {Component, EventEmitter, Injector, Input, NgModule, OnInit, Optional, Output} from '@angular/core';
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
import {ChipsModule} from "primeng/chips";
import {BaseElementComponent, EspBaseComponentModule} from "../base-element/base-element.component";

@Component({
  selector: 'esp-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent extends BaseElementComponent implements OnInit {

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
    ChipsComponent
  ],
  imports: [
    CommonAngularModule,
    TooltipModule,
    CommonModule,
    FormsModule,
    ChipsModule,
    RouterLink,
    EspBaseComponentModule
  ],
  exports: [ChipsComponent]
})
export class EspChipsModule {
}
