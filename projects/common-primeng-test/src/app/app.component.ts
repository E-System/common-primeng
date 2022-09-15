import {Component} from '@angular/core';
import {DTOPagerResponse} from "es-common-angular/models/dtopager-response";
import {DTOPager} from "es-common-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'common-primeng-test';

  calendarValue: any;

  chipsValue: any;

  dropdownValue: any;
  dropdownOptions = [{name: 'name', value: 1}, {name: 'name1', value: 2}]

  inputValue: any;

  inputMaskValue: any;

  inputNumberValue: any;

  textareaValue: any;

  cols = [
    {field: 'id', header: 'id'},
    {field: 'name', header: 'name'},
  ];
  pager: DTOPagerResponse<any> = {
    data: [
      {id: 1, name: 'name'},
      {id: 2, name: 'name2'},
    ],
    pager: <DTOPager<any>>{page: 1, total: 1}
  };
}
