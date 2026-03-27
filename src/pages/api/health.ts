import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    success: true,
    data: {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '2.0.0'
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
