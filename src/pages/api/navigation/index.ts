import type { APIRoute } from 'astro'
import { getFileContent } from '../../../lib/github'

export const GET: APIRoute = async () => {
  try {
    const content = await getFileContent('content/navigation.json')
    
    if (!content) {
      return new Response(JSON.stringify({
        success: true,
        data: { navigationItems: [] }
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
        message: 'Failed to load navigation data',
        details: (error as Error).message,
        timestamp: new Date().toISOString()
      }
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
