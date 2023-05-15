import { Tasks } from '~/prisma'

export async function Task({ params: { id } }: { params: { id: string } }) {
  const { body, createdAt, updatedAt } = await Tasks.findUniqueOrThrow({
    where: { id },
  })

  const update = async () => {}

  return (
    <div className='col'>
      <div>body: {body}</div>
      <div>created: {createdAt.toLocaleString()}</div>
      <div>updated: {updatedAt.toLocaleString()}</div>
    </div>
  )
}
