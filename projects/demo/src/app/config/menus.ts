import { Menu } from '@ndct/railgun';

export const menus: Menu[] = [
  { title: '首页', link: '/', icon: 'home' },
  {
    title: 'Dashboard', icon: 'dashboard', children: [
      { title: '分析页', icon: 'smile', link: '/dashboard/analysis' },
      {
        title: 'Group', isGroup: true, children: [
          { title: '监控页', icon: 'smile', link: '/dashboard/monitor' },
          { title: '工作台', icon: 'smile', link: '/dashboard/workplace' }
        ]
      }
    ]
  },
  {
    title: '外链', icon: 'ie', open: true, children: [
      { title: 'Google', icon: 'google', link: 'https://www.google.com', target: '_blank' },
      { title: 'Github', icon: 'github', link: 'https://github.com', target: '_self' },
      { title: 'Gitlab', icon: 'gitlab', link: 'https://gitlab.com', disabled: true }
    ]
  }
];
