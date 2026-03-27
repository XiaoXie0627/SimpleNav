/**
 * 卡片组件类型定义
 */

/** 卡片基类 */
export interface BaseCard {
  id: string
  type: 'countdown' | 'text' | 'clock' | 'link'
  title?: string
  enabled: boolean
  position?: number
}

/** 倒数日卡片 */
export interface CountdownCard extends BaseCard {
  type: 'countdown'
  targetDate: string
  mode: 'countdown' | 'anniversary'
  backgroundColor?: string
  textColor?: string
}

/** 文本卡片 */
export interface TextCard extends BaseCard {
  type: 'text'
  content: string
  fontSize?: 'small' | 'medium' | 'large'
  textColor?: string
  backgroundColor?: string
  backgroundOpacity?: number
}

/** 时钟卡片 */
export interface ClockCard extends BaseCard {
  type: 'clock'
  format: 'digital' | 'analog'
  showDate?: boolean
  timezone?: string
}

/** 链接卡片 */
export interface LinkCard extends BaseCard {
  type: 'link'
  href: string
  icon?: string
}

/** 卡片联合类型 */
export type WidgetCard = CountdownCard | TextCard | ClockCard | LinkCard

/** 卡片容器 */
export interface WidgetContainer {
  id: string
  title?: string
  cards: WidgetCard[]
  enabled?: boolean
  columns?: number
  order: number
}
