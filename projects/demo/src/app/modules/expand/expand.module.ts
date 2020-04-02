import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandRoutingModule } from './expand-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExpandRoutingModule
  ]
})
export class ExpandModule {}
