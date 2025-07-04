import { NextResponse } from 'next/server'

export async function GET() {
  const KINESCOPE_TOKEN = process.env.KINESCOPE_API_KEY

  if (!KINESCOPE_TOKEN) {
    return NextResponse.json({ error: 'No API token provided' }, { status: 500 })
  }

  try {
    const apiRes = await fetch('https://api.kinescope.io/v1/projects', {
      headers: {
        Authorization: `Bearer ${KINESCOPE_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!apiRes.ok) {
      return NextResponse.json({ error: 'Kinescope error' }, { status: apiRes.status })
    }

    const data = await apiRes.json()
    // Можно отдать только нужные поля:
    // const projects = data.data.map((p: any) => ({ id: p.id, title: p.title }))
    return NextResponse.json(data)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
