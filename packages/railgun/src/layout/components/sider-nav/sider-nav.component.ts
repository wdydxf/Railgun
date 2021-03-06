import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

/**
 * 菜单项类型声明
 * */
export interface Menu {
  label: string;                // 菜单显示文字
  icon?: string;                // 图标
  link?: string;                // 链接地址, 以协议开头的地址会被视为外部链接
  children?: Menu[];            // 子菜单
  disabled?: boolean;           // 是否禁用
  isGroup?: boolean;            // 是否为菜单组
  open?: boolean;               // 是否展开二级菜单
  target?: '_self' | '_blank';  // 外部链接打开方式
}

@Component({
  selector: 'rg-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.less']
})
export class SiderNavComponent implements OnChanges, OnInit, OnDestroy {
  @Input() data: Menu[] = [];     // 菜单数据
  @Input() collapsed = false;     // 是否折叠菜单
  @Input() autoExpand = true;     // 是否根据路由自动展开菜单

  private destroy$ = new Subject();

  constructor(
    private location: Location,
    private router: Router
  ) {
  }

  /**
   * 判定是否为外部链接
   * @param link  链接地址
   */
  isExternalLink(link: string) {
    return (/(\w):\/\//).test(link);
  }

  /**
   * 检查菜单项, 若其子项与路由匹配则展开自身
   * @param menu 要检查的菜单项
   * @param keep 是否保留原有的展开状态
   */
  private checkMenuItemExpand(menu: Menu, keep: boolean): boolean {
    const path = this.location.path();

    if (menu.children) {
      menu.open = keep ? !!menu.open : false;
      menu.children.forEach(v => {
        // 检查子项
        if (!v.children && v.link && path.startsWith(v.link)) {
          menu.open = true;
        }

        // 对于多级菜单递归向下检查
        if (v.children && this.checkMenuItemExpand(v, keep)) {
          menu.open = true;
        }
      });
    }

    return !!menu.open;
  }

  /**
   * 关闭菜单项自身及其子项
   * @param menu 要关闭的菜单项
   */
  private closeMenuItem(menu: Menu) {
    // 当菜单项为关闭状态时其子项必然是关闭的, 无需向下检查
    if (!menu.children || !menu.open) { return; }
    menu.open = false;
    menu.children.forEach(v => this.closeMenuItem(v));
  }

  /**
   * 订阅路由变动
   */
  private registerRouterChange() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.data.forEach(v => this.checkMenuItemExpand(v, true));
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 执行菜单项检查
    if (this.autoExpand && changes.data) {
      this.data.forEach(v => this.checkMenuItemExpand(v, false));
    }

    // 当菜单项展开层数过多时, 执行折叠会造成菜单错位的问题. 所以在执行折叠时, 关闭所有展开的菜单项
    if (this.collapsed && changes.collapsed) {
      this.data.forEach(v => this.closeMenuItem(v));
    }
  }

  ngOnInit(): void {
    if (this.autoExpand) {
      this.registerRouterChange();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
