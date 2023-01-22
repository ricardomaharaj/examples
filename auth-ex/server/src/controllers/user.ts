import { FastifyReply as Res, FastifyRequest as Req } from 'fastify'
import { User } from '../models/user'
import { ReqBody } from '../types/req-body'

export const UserController = {
  get: async (req: Req, res: Res) => {
    try {
      let users = await User.findAll()
      return users
    } catch (error) {
      res.status(500)
      return { error }
    }
  },
  post: async (req: Req, res: Res) => {
    let { username, password } = req.body as ReqBody
    if (!username || !password) {
      res.status(400)
      return 'username and password required'
    }
    try {
      let user = await User.findOne({ where: { username } })
      if (user) {
        res.status(400)
        return 'username taken'
      }
      try {
        let user = await User.create({ username, password })
        return user
      } catch (error) {
        res.status(500)
        return { error }
      }
    } catch (error) {
      res.status(500)
      return { error }
    }
  }
}
