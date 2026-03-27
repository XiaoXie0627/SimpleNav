/**
 * 资源数据类型定义
 */

/** 资源分类 */
export interface ResourceSection {
  id: string
  title: string
  description?: string
  icon?: string
  items: ResourceItem[]
  order: number
  enabled: boolean
}

/** 资源项目 */
export interface ResourceItem {
  id: string
  title: string
  description: string
  icon: string
  url: string
  type?: 'tool' | 'material' | 'tutorial' | 'other'
  tags?: string[]
  order: number
  enabled: boolean
}
