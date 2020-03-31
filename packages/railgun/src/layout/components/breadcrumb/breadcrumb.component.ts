import { Component, Input } from '@angular/core';

/**
 * 面包屑类型声明
 * */
export interface Breadcrumb {
  title: string;      // 面包屑文字
  link?: string;      // 面包屑链接
}

@Component({
  selector: 'rg-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent {
  @Input() showHome = true;                  // 是否显示首页
  @Input() homeTitle = '首页';                // 首页文字
  @Input() homeLink = '/';                   // 首页链接
  @Input() data: Breadcrumb[] = [];           // 面包屑数据
}
