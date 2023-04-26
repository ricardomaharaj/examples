import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const { user: Users, post: Posts, comment: Comments } = prisma
