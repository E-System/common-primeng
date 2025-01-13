import {Component, OnInit, Optional} from '@angular/core';
import {ErrorStateMatcher} from "es-common-angular";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ControlContainer, FormGroupDirective, FormsModule, NgControl, NgForm} from "@angular/forms";
import {BaseElementComponent} from "../base-element/base-element.component";
import {AutoComplete} from "primeng/autocomplete";

@Component({
  selector: 'esp-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  imports: [
    AutoComplete,
    FormsModule,
    NgClass,
    NgIf,
    NgForOf,
    BaseElementComponent
  ]
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
