import { NgModule } from '@angular/core';
import { SiderNavComponent } from './components/sider-nav/sider-nav.component';
import { NzIconModule, NzMenuModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiderNavItemComponent } from './components/sider-nav-item/sider-nav-item.component';


@NgModule({
  declarations: [
    SiderNavComponent,
    SiderNavItemComponent
  ],
  imports: [
    NzMenuModule,
    CommonModule,
    RouterModule,
    NzIconModule
  ],
  exports: [
    SiderNavComponent
  ]
})
export class RailgunLayoutModule {
}
