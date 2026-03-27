import type { APIRoute } from 'astro'
import { exportData } from '../../../lib/github'

export const GET: APIRoute = async () => {
  try {
    const data = await exportData()
    
    return new Response(JSON.stringify({
      success: true,
      data,
      exportedAt: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: {
        code: 'EXPORT_FAILED',
        message: 'Failed to export data',
        details: (error as Error).message,
        timestamp: new Date().toISOString()
      }
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
