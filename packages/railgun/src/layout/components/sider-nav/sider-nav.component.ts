import { Component, Input } from '@angular/core';
import { Menu } from '../../interface';

@Component({
  selector: 'rg-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.less']
})
export class SiderNavComponent {
  @Input() menus: Menu[] = [];    // 菜单数据
  @Input() collapsed = false;     // 是否折叠菜单

  /**
   * 判定是否为外部链接
   * @param link  链接地址
   */
  isExternalLink(link: string) {
    return (/(\w):\/\//).test(link);
  }
}
