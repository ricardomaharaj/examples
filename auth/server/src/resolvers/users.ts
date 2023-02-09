import { Resolver } from '../types/resolver'
import { compareSync } from 'bcrypt'
import { jwtSign, jwtDecode, jwtVerify } from '../util/jwt'
import { User } from '../models/user'

const getAllUsers: Resolver = async (_, args) => {
  return await User.findAll({ attributes: { exclude: ['password'] } })
}

const createUser: Resolver = async (_, args) => {
  const { username, password } = args

  const userFound = await User.findOne({ where: { username } })

  if (userFound) return false

  const newUser = new User({
    username,
    password,
  })

  await newUser.save()

  return newUser
}

const authenticateUser: Resolver = async (_, args) => {
  const { username, password } = args

  const user = await User.findOne({ where: { username } })
  if (!user) return false

  const check = compareSync(password, user.password)
  if (!check) return false

  return {
    jwt: jwtSign(user.toJSON()),
  }
}

const whoAmI: Resolver = async (_, args) => {
  const { jwt } = args
  const jwtUser = jwtVerify(jwt) as User
  const user = await User.findByPk(jwtUser.username)
  if (!user) return false
  return user.username
}

const verifyUser: Resolver = async (_, args) => {
  const { jwt } = args
  return jwtVerify(jwt)
}

const decodeUser: Resolver = async (_, args) => {
  const { jwt } = args
  return jwtDecode(jwt)
}

export const Users = {
  Query: {
    getAllUsers,
    authenticateUser,
    whoAmI,
    verifyUser,
    decodeUser,
  },
  Mutation: {
    createUser,
  },
}
