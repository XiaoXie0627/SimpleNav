/**
 * 导航状态管理
 */

import { atom, computed } from 'nanostores'
import type { NavigationData, NavigationItem } from '../types'

/** 导航数据 */
export const navigationData = atom<NavigationData>({ navigationItems: [] })

/** 当前激活的分类ID */
export const activeCategory = atom<string | null>(null)

/** 侧边栏是否展开 */
export const sidebarOpen = atom<boolean>(true)

/** 加载状态 */
export const isLoading = atom<boolean>(false)

/** 获取所有启用的分类 */
export const enabledCategories = computed(navigationData, ($data) => {
  return $data.navigationItems.filter(item => item.enabled)
})

/** 根据ID获取分类 */
export function getCategoryById(id: string): NavigationItem | undefined {
  return navigationData.get().navigationItems.find(item => item.id === id)
}

/** 设置激活分类 */
export function setActiveCategory(id: string | null): void {
  activeCategory.set(id)
}

/** 切换侧边栏 */
export function toggleSidebar(): void {
  sidebarOpen.set(!sidebarOpen.get())
}

/** 加载导航数据 */
export async function loadNavigationData(): Promise<void> {
  isLoading.set(true)
  
  try {
    const response = await fetch('/api/navigation')
    if (response.ok) {
      const data = await response.json()
      if (data.success) {
        navigationData.set(data.data)
      }
    }
  } catch (error) {
    console.error('Failed to load navigation data:', error)
  } finally {
    isLoading.set(false)
  }
}
