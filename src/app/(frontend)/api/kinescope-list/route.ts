/* eslint-disable @typescript-eslint/no-explicit-any */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const projectId = searchParams.get('projectId')

  const res = await fetch('https://api.kinescope.io/v1/videos?sort=title', {
    headers: {
      Authorization: `Bearer ${process.env.KINESCOPE_API_KEY}`,
    },
  })
  const data = await res.json()

  const filtered = data.data.filter((v: any) => v.project_id === projectId)

  return Response.json({ items: filtered })
}
