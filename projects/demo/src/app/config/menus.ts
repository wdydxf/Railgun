import { Menu } from '@ndct/railgun';

export const menus: Menu[] = [
  { label: '首页', link: '/', icon: 'home' },
  {
    label: 'Dashboard', icon: 'dashboard', children: [
      { label: '分析页', icon: 'smile', link: '/dashboard/analysis' },
      { label: '监控页', icon: 'smile', link: '/dashboard/monitor' },
      { label: '工作台', icon: 'smile', link: '/dashboard/workplace' }
    ]
  },
  {
    label: '表单页', icon: 'anticon-form', children: [
      { label: '基础表单', icon: 'smile', link: '/form/basic-form' },
      { label: '分步表单', icon: 'smile', link: '/form/step-form' },
      { label: '高级表单', icon: 'smile', link: '/form/advanced-form' }
    ]
  },
  {
    label: '列表页', icon: 'anticon-table', children: [
      {
        label: '搜索列表', icon: 'anticon-search', children: [
          { label: '搜索列表(文章)', icon: 'smile', link: '/list/search/articles' },
          { label: '搜索列表(项目)', icon: 'smile', link: '/list/search/projects' },
          { label: '搜索列表(应用)', icon: 'smile', link: '/list/search/applications' }
        ]
      },
      { label: '查询表格', icon: 'smile', link: '/list/table-list' },
      { label: '标准列表', icon: 'smile', link: '/list/basic-list' },
      { label: '卡片列表', icon: 'smile', link: '/list/card-list' }
    ]
  },
  {
    label: '详情页', icon: 'anticon-profile', children: [
      { label: '基础详情页', icon: 'smile', link: '/profile/basic' },
      { label: '高级详情页', icon: 'smile', link: '/profile/advanced' }
    ]
  },
  {
    label: '结果页', icon: 'anticon-check-circle', children: [
      { label: '成功页', icon: 'smile', link: '/result/success' },
      { label: '失败页', icon: 'smile', link: '/result/fail' }
    ]
  },
  {
    label: '异常页', icon: 'anticon-warning', children: [
      { label: '403', icon: 'smile', link: '/exception/403' },
      { label: '404', icon: 'smile', link: '/exception/404' },
      { label: '500', icon: 'smile', link: '/exception/500' }
    ]
  },
  {
    label: '个人页', icon: 'anticon-user', children: [
      { label: '个人中心', icon: 'smile', link: '/account/center' },
      { label: '个人设置', icon: 'smile', link: '/account/settings' }
    ]
  },
  {
    label: '外链', icon: 'ie', open: true, children: [
      { label: 'Google', icon: 'google', link: 'https://www.google.com', target: '_blank' },
      { label: 'Github', icon: 'github', link: 'https://github.com', target: '_self' },
      { label: 'Gitlab', icon: 'gitlab', link: 'https://gitlab.com', disabled: true }
    ]
  },
  {
    label: '拓展组件', icon: 'experiment', children: [
      { label: '表格', icon: 'table', link: '/expand/table' }
    ]
  }
];
