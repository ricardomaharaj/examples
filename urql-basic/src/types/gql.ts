import { DateTime } from '~/types/date-time'

export type Task = {
  id: string
  createdAt: DateTime
  updatedAt: DateTime
}
