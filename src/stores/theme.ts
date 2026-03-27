/**
 * 主题状态管理
 */

import { atom, computed } from 'nanostores'
import { isBrowser } from '../lib/utils'

/** 主题类型 */
export type Theme = 'light' | 'dark' | 'system'

/** 当前主题设置 */
export const theme = atom<Theme>('system')

/** 系统主题 */
export const systemTheme = atom<'light' | 'dark'>('light')

/** 实际应用的主题 */
export const effectiveTheme = computed([theme, systemTheme], ($theme, $systemTheme) => {
  if ($theme === 'system') {
    return $systemTheme
  }
  return $theme
})

/** 初始化主题 */
export function initTheme(): void {
  if (!isBrowser()) return
  
  // 读取本地存储的主题
  const savedTheme = localStorage.getItem('fastnav-theme') as Theme | null
  if (savedTheme) {
    theme.set(savedTheme)
  }
  
  // 监听系统主题变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  systemTheme.set(mediaQuery.matches ? 'dark' : 'light')
  
  mediaQuery.addEventListener('change', (e) => {
    systemTheme.set(e.matches ? 'dark' : 'light')
    applyTheme()
  })
  
  // 应用主题
  applyTheme()
}

/** 设置主题 */
export function setTheme(newTheme: Theme): void {
  theme.set(newTheme)
  if (isBrowser()) {
    localStorage.setItem('fastnav-theme', newTheme)
    applyTheme()
  }
}

/** 应用主题到DOM */
export function applyTheme(): void {
  if (!isBrowser()) return
  
  const $effectiveTheme = effectiveTheme.get()
  
  if ($effectiveTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

/** 切换主题 */
export function toggleTheme(): void {
  const current = effectiveTheme.get()
  setTheme(current === 'dark' ? 'light' : 'dark')
}
