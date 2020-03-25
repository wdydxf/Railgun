import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule, NzMenuModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { SiderNavComponent } from './components/sider-nav/sider-nav.component';
import { SiderNavItemComponent } from './components/sider-nav-item/sider-nav-item.component';


@NgModule({
  declarations: [
    SiderNavComponent,
    SiderNavItemComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    RouterModule,
    NzIconModule
  ],
  exports: [
    SiderNavComponent
  ]
})
export class RgLayoutModule {
}
