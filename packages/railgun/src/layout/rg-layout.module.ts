import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule, NzIconModule, NzMenuModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { SiderNavComponent } from './components/sider-nav/sider-nav.component';
import { SiderNavItemComponent } from './components/sider-nav-item/sider-nav-item.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    SiderNavComponent,
    SiderNavItemComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    RouterModule,
    NzIconModule,
    NzBreadCrumbModule
  ],
  exports: [
    SiderNavComponent,
    BreadcrumbComponent
  ]
})
export class RgLayoutModule {
}
