import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import {DTOPagerResponse} from "es-common-angular/models/dtopager-response";
import {TableColumn} from "es-common-angular/models/table-column";
import {PrimeTemplate} from "primeng/api";
import {Toolbar} from "primeng/toolbar";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {TableModule} from "primeng/table";
import {RouterLink} from "@angular/router";
import {Button, ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {Paginator} from "primeng/paginator";

@Component({
  selector: 'esp-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
  imports: [
    Toolbar,
    NgIf,
    NgTemplateOutlet,
    TableModule,
    RouterLink,
    ButtonDirective,
    Ripple,
    Button,
    NgForOf,
    Paginator
  ]
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
