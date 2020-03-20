import { Component, Input } from '@angular/core';
import { Menu } from '../../interface';

@Component({
  selector: 'rg-sider-nav-item',
  templateUrl: './sider-nav-item.component.html',
  styleUrls: ['./sider-nav-item.component.less']
})
export class SiderNavItemComponent {
  @Input() menu: Menu | null = null;

  /**
   * 判定是否为外部链接
   * @param link  链接地址
   */
  isExternalLink(link: string) {
    return (/(\w):\/\//).test(link);
  }
}
