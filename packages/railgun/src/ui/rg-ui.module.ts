import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableColumnComponent } from './components/table-column/table-column.component';


@NgModule({
  declarations: [TableComponent, TableColumnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TableColumnComponent
  ]
})
export class RgUiModule {}
