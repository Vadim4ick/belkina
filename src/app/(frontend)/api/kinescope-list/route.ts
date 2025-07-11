export async function GET() {
  const res = await fetch('https://api.kinescope.io/v1/videos', {
    headers: {
      Authorization: `Bearer ${process.env.KINESCOPE_API_KEY}`,
    },
  })
  const data = await res.json()

  // console.log('res', res)

  return Response.json({ items: data.data })
}
