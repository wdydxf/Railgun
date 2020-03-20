import { NgModule } from '@angular/core';
import { SiderNavComponent } from './components/sider-nav/sider-nav.component';
import { NzIconModule, NzMenuModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SiderNavComponent
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
