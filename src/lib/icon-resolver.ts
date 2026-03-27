/**
 * 图标路径解析工具
 */

import type { IconType, ResolvedIcon } from '../types'

/**
 * 解析图标路径
 */
export function resolveIconPath(icon?: string): ResolvedIcon {
  if (!icon) {
    return { type: 'default', path: '/assets/images/default-icon.svg' }
  }
  
  if (icon.startsWith('/assets/')) {
    return { type: 'local', path: icon }
  }
  
  if (icon.startsWith('http://') || icon.startsWith('https://')) {
    return { type: 'remote', path: icon }
  }
  
  // 默认为Lucide图标名称
  return { type: 'lucide', path: icon }
}

/**
 * 获取图标组件类型
 */
export function getIconComponentType(type: IconType): string {
  switch (type) {
    case 'lucide':
      return 'lucide'
    case 'local':
    case 'remote':
      return 'image'
    default:
      return 'default'
  }
}

/**
 * 检查是否为有效的Lucide图标名称
 */
export function isValidLucideIcon(name: string): boolean {
  // Lucide图标名称格式：全小写，单词用连字符连接
  return /^[a-z]+(-[a-z]+)*$/.test(name)
}

/**
 * 获取默认图标列表
 */
export function getDefaultIcons(): string[] {
  return [
    'globe',
    'link',
    'star',
    'bookmark',
    'folder',
    'file',
    'code',
    'terminal',
    'database',
    'server',
    'cloud',
    'device',
    'mobile',
    'monitor',
    'cpu',
    'zap'
  ]
}
