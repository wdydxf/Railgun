/**
 * 菜单项类型约束
 * */
export interface Menu {
  title: string;                // 菜单显示文字
  icon?: string;                // 图标
  link?: string;                // 链接地址, 以协议开头的地址会被视为外部链接
  children?: Menu[];            // 子菜单
  disabled?: boolean;           // 是否禁用
  isGroup?: boolean;            // 是否为菜单组
  open?: boolean;               // 是否展开二级菜单
  target?: '_self' | '_blank';  // 外部链接打开方式
}
