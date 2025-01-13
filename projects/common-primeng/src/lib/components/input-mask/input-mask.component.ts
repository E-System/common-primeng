import {Component, Input, OnInit, Optional} from '@angular/core';
import {ControlContainer, FormGroupDirective, FormsModule, NgControl, NgForm} from "@angular/forms";
import {ErrorStateMatcher} from "es-common-angular";
import {BaseElementComponent} from "../base-element/base-element.component";
import {NgClass, NgIf} from "@angular/common";
import {InputMask} from "primeng/inputmask";

@Component({
  selector: 'esp-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss'],
  imports: [
    BaseElementComponent,
    NgIf,
    FormsModule,
    NgClass,
    InputMask
  ]
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
