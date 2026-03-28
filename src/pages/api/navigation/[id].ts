import type { APIRoute } from 'astro'

export const prerender = false

export const GET: APIRoute = async ({ params }) => {
  const { id } = params

  // TODO: 实现根据ID获取分类
  return new Response(
    JSON.stringify({
      success: true,
      data: { id, title: 'Sample Category' },
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}

export const DELETE: APIRoute = async ({ params }) => {
  const { id } = params

  // TODO: 实现删除分类
  return new Response(
    JSON.stringify({
      success: true,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
