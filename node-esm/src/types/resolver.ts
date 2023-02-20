export type Args = {
  id: string | number
  task: string
}

export type Resolver = (_: any, args: Args, ctx: any) => any
