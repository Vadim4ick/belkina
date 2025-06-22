export const GET = async () => {
  // const payload = await getPayload({
  //   config: configPromise,
  // })

  return Response.json({
    message: 'This is an example of a custom route.',
  })
}
