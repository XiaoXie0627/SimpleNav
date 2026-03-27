/**
 * 导航数据类型定义
 */

/** 图标类型 */
export type IconType = 'local' | 'remote' | 'lucide' | 'default'

/** 导航数据根结构 */
export interface NavigationData {
  navigationItems: NavigationItem[]
}

/** 一级分类 */
export interface NavigationItem {
  id: string
  title: string
  icon?: string
  description?: string
  items: NavigationSubItem[]
  subCategories: NavigationSubCategory[]
  enabled: boolean
  order: number
}

/** 子分类 */
export interface NavigationSubCategory {
  id: string
  title: string
  items: NavigationSubItem[]
  enabled?: boolean
  order: number
}

/** 导航项目 */
export interface NavigationSubItem {
  id: string
  title: string
  href: string
  description?: string
  icon?: string
  enabled: boolean
  order: number
}

/** 图标解析结果 */
export interface ResolvedIcon {
  type: IconType
  path: string
}

/** 图标路径解析函数 */
export function resolveIconPath(icon?: string): ResolvedIcon {
  if (!icon) return { type: 'default', path: '/assets/images/default-icon.svg' }
  if (icon.startsWith('/assets/')) return { type: 'local', path: icon }
  if (icon.startsWith('http')) return { type: 'remote', path: icon }
  return { type: 'lucide', path: icon }
}
