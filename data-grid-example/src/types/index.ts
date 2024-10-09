export type Team = {
  id: string
  name: string

  members: User[]
}

export type User = {
  id: string
  name: string
  image: string
  status: UserStatus
  pendingTasks: number

  team?: Team
}

export const USER_STATUS = {
  Active: "Active",
  Inactive: "Inactive",
  Vacation: "Vacation",
  Sick: "Sick",
} as const

export type UserStatus = keyof typeof USER_STATUS

export const userStatuses = Object.values(USER_STATUS)

export const defaultTeams = ["Tech", "HR", "Marketing", "Finance", "Design"]
