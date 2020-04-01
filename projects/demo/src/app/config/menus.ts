import { Menu } from '@ndct/railgun';

export const menus: Menu[] = [
  { label: '首页', link: '/', icon: 'home' },
  {
    label: 'Dashboard', icon: 'dashboard', children: [
      { label: '分析页', icon: 'smile', link: '/dashboard/analysis' },
      {
        label: 'Group', isGroup: true, children: [
          { label: '监控页', icon: 'smile', link: '/dashboard/monitor' },
          { label: '工作台', icon: 'smile', link: '/dashboard/workplace' }
        ]
      }
    ]
  },
  {
    label: '外链', icon: 'ie', open: true, children: [
      { label: 'Google', icon: 'google', link: 'https://www.google.com', target: '_blank' },
      { label: 'Github', icon: 'github', link: 'https://github.com', target: '_self' },
      { label: 'Gitlab', icon: 'gitlab', link: 'https://gitlab.com', disabled: true }
    ]
  }
];
