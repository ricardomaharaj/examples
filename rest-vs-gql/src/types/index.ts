export type User = {
  id: string
  name?: string
  email?: string

  tasks: Task[]
}

export type Task = {
  id: string
  title?: string
  desc?: string

  users: User[]
}
