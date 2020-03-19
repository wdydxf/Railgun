import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.less']
})
export class DefaultLayoutComponent implements OnInit {
  title = 'Railgun';
  collapsed = false;

  constructor() {
  }

  /**
   * 处理侧边栏折叠
   */
  handleSiderCollapsed() {
    this.collapsed = !this.collapsed;
  }

  ngOnInit(): void {
  }

}
