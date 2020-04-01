import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';


const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      {
        path: 'dashboard', data: { label: 'Dashboard' },
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
