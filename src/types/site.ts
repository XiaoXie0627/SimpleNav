/**
 * 站点配置类型定义
 */

/** 站点配置 */
export interface SiteConfig {
  basic: BasicConfig
  appearance: AppearanceConfig
  navigation: NavigationConfig
  search: SearchConfig
  dailyQuote: DailyQuoteConfig
  contextMenu: ContextMenuConfig
}

/** 基本信息配置 */
export interface BasicConfig {
  title: string
  description: string
  keywords: string
  defaultCategory: string
}

/** 外观配置 */
export interface AppearanceConfig {
  logo: string
  favicon: string
  theme: 'light' | 'dark' | 'system'
  backgroundImage?: string
  backgroundOpacity?: number
}

/** 导航配置 */
export interface NavigationConfig {
  linkTarget: '_blank' | '_self'
  hoverEffect: 'default' | 'glass' | 'lift' | 'tilt'
}

/** 搜索配置 */
export interface SearchConfig {
  defaultEngine: string
  engines: SearchEngine[]
  enableHistory: boolean
  maxHistoryItems: number
}

/** 搜索引擎 */
export interface SearchEngine {
  id: string
  name: string
  url: string
  icon: string
}

/** 每日一言配置 */
export interface DailyQuoteConfig {
  enabled: boolean
  quotes: string[]
  displayMode: 'random' | 'sequential' | 'fixed'
}

/** 右键菜单配置 */
export interface ContextMenuConfig {
  enabled: boolean
  enableCopyLink: boolean
}

/** 搜索历史记录 */
export interface SearchHistory {
  query: string
  engine: string
  timestamp: number
}
