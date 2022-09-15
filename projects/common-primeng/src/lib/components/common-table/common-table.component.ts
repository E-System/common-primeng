import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import {DTOPagerResponse} from "es-common-angular/models/dtopager-response";
import {TableColumn} from "es-common-angular/models/table-column";
import {CommonAngularModule} from "es-common-angular";
import {TooltipModule} from "primeng/tooltip";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {RouterLink, RouterLinkWithHref} from "@angular/router";
import {DropdownComponent} from "../dropdown/dropdown.component";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {PaginatorModule} from "primeng/paginator";
import {PrimeTemplate} from "primeng/api";

@Component({
  selector: 'esp-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent<T> implements OnInit, AfterContentInit {

  @Input() pager: DTOPagerResponse<T> | null = null;
  @Input() columns: TableColumn[] = [];
  filterTemplate: TemplateRef<any> | null = null;
  topbarTemplate: TemplateRef<any>  | null = null;
  bodyTemplate: TemplateRef<any>  | null = null;

  @Output('pageChange') pageChangeEmitter = new EventEmitter();

  @ContentChildren(PrimeTemplate) templates: QueryList<any> | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case 'filter':
          this.filterTemplate = item.template;
          break;
        case 'topbar':
          this.topbarTemplate = item.template;
          break;
        case 'body':
        default:
          this.bodyTemplate = item.template;
          break;
      }
    });
  }

  pageChange($event: any) {
    this.pageChangeEmitter.emit($event);
  }
}

@NgModule({
  declarations: [
    CommonTableComponent
  ],
  imports: [
    CommonAngularModule,
    CommonModule,
    FormsModule,
    RouterLinkWithHref,
    ToolbarModule,
    TableModule,
    ButtonModule,
    RippleModule,
    RouterLink,
    PaginatorModule
  ],
  exports: [CommonTableComponent]
})
export class EspCommonTableModule {
}
