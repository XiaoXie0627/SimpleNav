/**
 * 网络请求重试策略
 */

import type { RetryConfig } from '../types'
import { DEFAULT_RETRY_CONFIG } from '../types'

/**
 * 带重试的异步请求
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  config: Partial<RetryConfig> = {}
): Promise<T> {
  const { maxRetries, baseDelay, maxDelay, backoffFactor } = {
    ...DEFAULT_RETRY_CONFIG,
    ...config
  }

  let lastError: Error | undefined

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      
      if (attempt < maxRetries) {
        const delay = Math.min(
          baseDelay * Math.pow(backoffFactor, attempt),
          maxDelay
        )
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError
}
