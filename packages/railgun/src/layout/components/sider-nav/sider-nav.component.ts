import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { Menu } from '../../interface';

@Component({
  selector: 'rg-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.less']
})
export class SiderNavComponent implements OnChanges {
  @Input() menus: Menu[] = [];    // 菜单数据
  @Input() collapsed = false;     // 是否折叠菜单
  @Input() autoExpand = true;     // 是否根据路由自动展开菜单

  constructor(
    private location: Location
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
   */
  checkMenuItemExpand(menu: Menu): boolean {
    const path = this.location.path();

    if (menu.children) {
      menu.open = false;  // 默认关闭
      menu.children.forEach(v => {
        // 检查子项
        if (!v.children && v.link && path.startsWith(v.link)) {
          menu.open = true;
        }

        // 对于多级菜单递归向下检查
        if (v.children && this.checkMenuItemExpand(v)) {
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
  closeMenuItem(menu: Menu) {
    // 当菜单项为关闭状态时其子项必然是关闭的, 无需向下检查
    if (!menu.children || !menu.open) { return; }
    menu.open = false;
    menu.children.forEach(v => this.closeMenuItem(v));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 执行菜单项检查
    if (this.autoExpand && changes.menus) {
      this.menus.forEach(v => this.checkMenuItemExpand(v));
    }

    // 当菜单项展开层数过多时, 执行折叠会造成菜单错位的问题. 所以在执行折叠时, 关闭所有展开的菜单项
    if (this.collapsed && changes.collapsed) {
      this.menus.forEach(v => this.closeMenuItem(v));
    }
  }
}
