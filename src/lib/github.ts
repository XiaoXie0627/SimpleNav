/**
 * GitHub API 封装
 */

import { withRetry } from './retry'
import type { ApiResponse } from '../types'

/** GitHub 配置 */
interface GitHubConfig {
  owner: string
  repo: string
  branch: string
  token?: string
}

/** 获取GitHub配置 */
function getGitHubConfig(): GitHubConfig {
  return {
    owner: import.meta.env.GITHUB_OWNER || '',
    repo: import.meta.env.GITHUB_REPO || '',
    branch: import.meta.env.GITHUB_BRANCH || 'main',
    token: import.meta.env.GITHUB_TOKEN
  }
}

/** GitHub API 基础URL */
const GITHUB_API_BASE = 'https://api.github.com'

/**
 * 获取文件内容
 */
export async function getFileContent(path: string): Promise<string | null> {
  const config = getGitHubConfig()
  
  return withRetry(async () => {
    const url = `${GITHUB_API_BASE}/repos/${config.owner}/${config.repo}/contents/${path}?ref=${config.branch}`
    
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json'
    }
    
    if (config.token) {
      headers['Authorization'] = `token ${config.token}`
    }
    
    const response = await fetch(url, { headers })
    
    if (!response.ok) {
      if (response.status === 404) return null
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.encoding === 'base64') {
      return atob(data.content)
    }
    
    return data.content
  })
}

/**
 * 更新文件内容
 */
export async function updateFileContent(
  path: string,
  content: string,
  message: string
): Promise<boolean> {
  const config = getGitHubConfig()
  
  if (!config.token) {
    throw new Error('GitHub token is required for file updates')
  }
  
  return withRetry(async () => {
    // 先获取当前文件的SHA
    const getUrl = `${GITHUB_API_BASE}/repos/${config.owner}/${config.repo}/contents/${path}?ref=${config.branch}`
    
    const getResponse = await fetch(getUrl, {
      headers: {
        'Authorization': `token ${config.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    
    let sha: string | undefined
    
    if (getResponse.ok) {
      const existingFile = await getResponse.json()
      sha = existingFile.sha
    }
    
    // 更新或创建文件
    const putUrl = `${GITHUB_API_BASE}/repos/${config.owner}/${config.repo}/contents/${path}`
    
    const body: Record<string, unknown> = {
      message,
      content: btoa(unescape(encodeURIComponent(content))),
      branch: config.branch
    }
    
    if (sha) {
      body.sha = sha
    }
    
    const putResponse = await fetch(putUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${config.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    
    return putResponse.ok
  })
}

/**
 * 检查文件是否存在
 */
export async function fileExists(path: string): Promise<boolean> {
  const content = await getFileContent(path)
  return content !== null
}

/**
 * 导出数据为JSON
 */
export async function exportData(): Promise<Record<string, unknown>> {
  const files = [
    'content/navigation.json',
    'content/site.json',
    'content/resource-metadata.json',
    'content/widget.json'
  ]
  
  const data: Record<string, unknown> = {}
  
  for (const file of files) {
    const content = await getFileContent(file)
    if (content) {
      const key = file.replace('content/', '').replace('.json', '')
      data[key] = JSON.parse(content)
    }
  }
  
  return data
}
