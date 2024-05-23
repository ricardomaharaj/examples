import { DateTime } from '~/types/date-time'

export type User = {
  id: string
  name: string
  email: string
  image?: string

  tasks: Task[]
  location?: Location
  skills: string[]

  createdAt: DateTime
  updatedAt: DateTime
}

export type Location = {
  id: string
  country?: string
  province?: string
  city?: string
}

export type Task = {
  id: string
  title: string
  desc?: string

  users: User[]

  createdAt: DateTime
  updatedAt: DateTime
}
