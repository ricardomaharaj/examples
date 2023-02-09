import { hashSync } from 'bcrypt'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from 'sequelize'
import { sequelize } from '../db'

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare username: string
  declare password: string
}

User.init(
  {
    username: { type: DataTypes.STRING, unique: true, primaryKey: true },
    password: {
      type: DataTypes.STRING,
      set(val) {
        this.setDataValue('password', hashSync(val as string, 10))
      },
    },
  },
  { modelName: 'User', sequelize, createdAt: false, updatedAt: false }
)
