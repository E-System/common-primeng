import {Component, EventEmitter, Injector, Input, NgModule, OnInit, Optional, Output} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective, FormsModule,
  NgControl,
  NgForm
} from "@angular/forms";
import {CommonAngularModule, ErrorStateMatcher} from "es-common-angular";
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {InputTextareaModule} from "primeng/inputtextarea";
import {BaseElementComponent, EspBaseComponentModule} from "../base-element/base-element.component";

@Component({
  selector: 'esp-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent extends BaseElementComponent implements OnInit {


  @Input() autoResize: boolean = false;
  @Input() rows: number = 5;


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
    TextareaComponent
  ],
  imports: [
    CommonAngularModule,
    TooltipModule,
    CommonModule,
    FormsModule,
    InputTextareaModule,
    RouterLink,
    EspBaseComponentModule
  ],
  exports: [TextareaComponent]
})
export class EspTextareaModule {
}
