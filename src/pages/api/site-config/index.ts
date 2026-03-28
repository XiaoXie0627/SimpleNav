import type { APIRoute } from 'astro'
import siteConfig from '../../../data/site.json'

export const prerender = false

export const GET: APIRoute = async () => {
  try {
    return new Response(
      JSON.stringify({
        success: true,
        data: siteConfig,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to load site config',
          details: (error as Error).message,
          timestamp: new Date().toISOString(),
        },
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
