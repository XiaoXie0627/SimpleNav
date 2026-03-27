/**
 * API 响应类型定义
 */

/** API 错误响应 */
export interface ApiErrorResponse {
  success: false
  error: {
    code: string
    message: string
    details?: string
    timestamp: string
  }
}

/** API 成功响应 */
export interface ApiSuccessResponse<T> {
  success: true
  data: T
}

/** API 响应联合类型 */
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse

/** 错误代码枚举 */
export enum ApiErrorCode {
  AUTH_REQUIRED = 'AUTH_REQUIRED',
  AUTH_INVALID = 'AUTH_INVALID',
  AUTH_EXPIRED = 'AUTH_EXPIRED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  RATE_LIMITED = 'RATE_LIMITED',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  GITHUB_API_ERROR = 'GITHUB_API_ERROR'
}

/** 重试配置 */
export interface RetryConfig {
  maxRetries: number
  baseDelay: number
  maxDelay: number
  backoffFactor: number
}

/** 默认重试配置 */
export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  baseDelay: 1000,
  maxDelay: 5000,
  backoffFactor: 2
}
