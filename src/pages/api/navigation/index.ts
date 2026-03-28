import type { APIRoute } from 'astro'
import navigationData from '../../../data/navigation.json'

export const prerender = false

export const GET: APIRoute = async () => {
  try {
    return new Response(
      JSON.stringify({
        success: true,
        data: navigationData,
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
          message: 'Failed to load navigation data',
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
