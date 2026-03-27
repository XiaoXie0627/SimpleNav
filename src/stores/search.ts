/**
 * 搜索状态管理
 */

import { atom } from 'nanostores'
import type { SearchHistory } from '../types'

/** 搜索关键词 */
export const searchQuery = atom<string>('')

/** 搜索结果 */
export const searchResults = atom<Array<{ id: string; title: string; href: string; category: string }>>([])

/** 搜索框是否聚焦 */
export const isSearchFocused = atom<boolean>(false)

/** 搜索历史记录 */
export const searchHistory = atom<SearchHistory[]>([])

/** 加载搜索历史 */
export function loadSearchHistory(): void {
  if (typeof window === 'undefined') return
  
  try {
    const saved = localStorage.getItem('fastnav-search-history')
    if (saved) {
      searchHistory.set(JSON.parse(saved))
    }
  } catch {
    searchHistory.set([])
  }
}

/** 添加搜索历史 */
export function addSearchHistory(query: string, engine: string): void {
  if (!query.trim()) return
  
  const history = searchHistory.get()
  const newHistory: SearchHistory[] = [
    { query, engine, timestamp: Date.now() },
    ...history.filter(h => h.query !== query)
  ].slice(0, 5) // 最多保存5条
  
  searchHistory.set(newHistory)
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('fastnav-search-history', JSON.stringify(newHistory))
  }
}

/** 清除搜索历史 */
export function clearSearchHistory(): void {
  searchHistory.set([])
  if (typeof window !== 'undefined') {
    localStorage.removeItem('fastnav-search-history')
  }
}

/** 删除单条搜索历史 */
export function removeSearchHistory(query: string): void {
  const history = searchHistory.get()
  searchHistory.set(history.filter(h => h.query !== query))
  
  if (typeof window !== 'undefined') {
    localStorage.setItem('fastnav-search-history', JSON.stringify(searchHistory.get()))
  }
}
