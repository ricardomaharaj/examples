type Args = {
  id: string
  task: string
}

export type Resolver<T> = (_: any, args: Args) => Promise<T>
