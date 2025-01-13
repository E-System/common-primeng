import {Component, Input, OnInit, Optional} from '@angular/core';
import {ControlContainer, FormGroupDirective, FormsModule, NgControl, NgForm} from "@angular/forms";
import {ErrorStateMatcher} from "es-common-angular";
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {BaseElementComponent} from "../base-element/base-element.component";
import {Textarea} from "primeng/textarea";

@Component({
  selector: 'esp-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  imports: [
    FormsModule,
    Textarea,
    NgClass,
    NgStyle,
    BaseElementComponent,
    NgIf
  ]
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
