import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';


const routes: Routes = [
  { path: 'analysis', component: AnalysisComponent, data: { label: '分析页' } },
  { path: 'monitor', component: MonitorComponent, data: { label: '监控页' } },
  { path: 'workplace', component: WorkplaceComponent, data: { label: '工作台' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
