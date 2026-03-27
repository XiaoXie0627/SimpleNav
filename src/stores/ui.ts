/**
 * UI 状态管理
 */

import { atom } from 'nanostores'

/** Toast通知类型 */
export interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

/** 全局加载状态 */
export const isLoading = atom<boolean>(false)

/** Toast通知列表 */
export const toasts = atom<Toast[]>([])

/** 返回顶部按钮是否显示 */
export const scrollToTopVisible = atom<boolean>(false)

/** 弹窗是否打开 */
export const modalOpen = atom<boolean>(false)

/** 添加Toast通知 */
export function addToast(toast: Omit<Toast, 'id'>): void {
  const id = Date.now().toString()
  const newToast: Toast = { ...toast, id }
  toasts.set([...toasts.get(), newToast])
  
  // 自动移除
  setTimeout(() => {
    removeToast(id)
  }, toast.duration || 4000)
}

/** 移除Toast通知 */
export function removeToast(id: string): void {
  toasts.set(toasts.get().filter(t => t.id !== id))
}

/** 显示成功Toast */
export function showSuccess(message: string): void {
  addToast({ message, type: 'success' })
}

/** 显示错误Toast */
export function showError(message: string): void {
  addToast({ message, type: 'error' })
}

/** 显示警告Toast */
export function showWarning(message: string): void {
  addToast({ message, type: 'warning' })
}

/** 显示信息Toast */
export function showInfo(message: string): void {
  addToast({ message, type: 'info' })
}

/** 设置返回顶部按钮显示状态 */
export function setScrollToTopVisible(visible: boolean): void {
  scrollToTopVisible.set(visible)
}

/** 初始化滚动监听 */
export function initScrollListener(): void {
  if (typeof window === 'undefined') return
  
  const handleScroll = () => {
    setScrollToTopVisible(window.scrollY > 300)
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
}
