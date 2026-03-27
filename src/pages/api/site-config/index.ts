import type { APIRoute } from 'astro'
import { getFileContent } from '../../../lib/github'

export const GET: APIRoute = async () => {
  try {
    const content = await getFileContent('content/site.json')
    
    if (!content) {
      // 返回默认配置
      const defaultConfig = {
        basic: {
          title: 'FastNav导航',
          description: '收集国内外优秀设计网站',
          keywords: '设计导航,设计资源',
          defaultCategory: 'common'
        },
        appearance: {
          logo: '/assets/images/logo.webp',
          favicon: '/assets/images/favicon.webp',
          theme: 'system'
        },
        navigation: {
          linkTarget: '_blank',
          hoverEffect: 'lift'
        },
        search: {
          defaultEngine: 'bing',
          engines: [
            { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=', icon: '/assets/images/search/bing.svg' },
            { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=', icon: '/assets/images/search/google.svg' }
          ],
          enableHistory: true,
          maxHistoryItems: 5
        },
        dailyQuote: {
          enabled: true,
          quotes: ['生活不止眼前的代码，还有诗和远方'],
          displayMode: 'random'
        },
        contextMenu: {
          enabled: true,
          enableCopyLink: true
        }
      }
      
      return new Response(JSON.stringify({
        success: true,
        data: defaultConfig
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    
    const data = JSON.parse(content)
    
    return new Response(JSON.stringify({
      success: true,
      data
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to load site config',
        details: (error as Error).message,
        timestamp: new Date().toISOString()
      }
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
