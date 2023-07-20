import '@auth/core/types'

declare module '@auth/core/types' {
  interface User {
    id: string
    name: string
    email: string
  }
  interface Session {
    user: {
      id: string
      name: string
      email: string
    }
  }
}
