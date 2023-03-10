export interface Args {
  id: string | number
  task: string
}

export type Resolver<T> = (_: any, args: Args) => Promise<T>
