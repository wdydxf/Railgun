import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';

/**
 * 面包屑类型声明
 * */
export interface Breadcrumb {
  label: string;      // 面包屑文字
  link?: string;      // 面包屑链接
}

@Component({
  selector: 'rg-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  @Input() homeLabel = '首页';                 // 首页文字
  @Input() homeLink = '/';                    // 首页链接
  @Input() data: Breadcrumb[] = [];           // 面包屑数据
  @Input() autoGenerate = true;               // 是否根据路由自动生成
  @Input() labelName = 'label';               // 自定义data属性

  private destroy$ = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * 扫描路由树并生成面包屑数据
   * @param route   路由对象
   * @param preUrl  url前缀
   * @param data    数据容器
   * */
  private generate(route: ActivatedRoute, preUrl: string, data: Breadcrumb[]): Breadcrumb[] {
    if (route.children.length === 0) { return data; }

    for (const child of route.children) {
      // 只处理主出口的路由
      if (child.outlet !== PRIMARY_OUTLET) { continue; }

      const path = child.snapshot.url.map(v => v.path).join('/');
      const link = `${preUrl}/${path}`;
      const label = child.snapshot.data[this.labelName];

      // 跳过空路由和没有配置label的路由
      // 没有对应组件的路由, 只渲染设置的文字但不添加链接
      if (path && label) {
        data.push({
          label,
          link: child.component ? link : ''
        });
      }

      // 向下递归, 这里要把当前的状态传递下去已形成准确的link
      return this.generate(child, link, data);
    }

    return [];
  }

  /**
   * 订阅路由变动
   * */
  private registerRouterChange() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$),
      startWith(true)
    ).subscribe(() => {
      this.data = this.generate(this.route, '', []);
    });
  }

  ngOnInit(): void {
    if (this.autoGenerate) {
      this.registerRouterChange();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
