import Fast from 'fastify'
import { db } from './db/index'
import { User } from './models/user'
import { ReqBody } from './types/req-body'

db.sync()

const fast = Fast()

fast.get('/users', async (req, res) => {
  try {
    let users = await User.findAll()
    return users
  } catch (error) {
    res.status(500)
    return { error }
  }
})

fast.post('/users', async (req, res) => {
  let { username, password } = req.body as ReqBody
  if (!username || !password) {
    res.status(400)
    return 'username and password required'
  }
  try {
    let userExists = await User.findOne({ where: { username } })
    if (userExists) {
      res.status(400)
      return 'user exists'
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
})

fast.listen({ port: 4000 })
