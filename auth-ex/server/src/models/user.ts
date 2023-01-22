import { DataTypes } from 'sequelize'
import { db } from '../db'

export const User = db.define('User', {
  username: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING }
})
