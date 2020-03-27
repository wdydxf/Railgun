import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';


@NgModule({
  declarations: [AnalysisComponent, MonitorComponent, WorkplaceComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
