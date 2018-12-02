import { MedcardComponent } from './medcard/medcard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { Routes } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableFilterComponent } from './table-filter/table-filter.component';

export const DataTablesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'basicdatatable',
      component: DataTableComponent
    }, {
      path: 'editing',
      component: TableEditingComponent
    }, {
      path: 'filter',
      component: TableFilterComponent
    },
    {
      path: 'user',
      component: UserInfoComponent
    },
    {
      path: 'med-card',
      component: MedcardComponent
    }
  ]
  }
];
