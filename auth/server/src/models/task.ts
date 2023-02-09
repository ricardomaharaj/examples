import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import { sequelize } from '../db'
import { User } from './user'

export class Task extends Model<
  InferAttributes<Task>,
  InferCreationAttributes<Task>
> {
  declare id: CreationOptional<number>
  declare user: ForeignKey<User['username']>
  declare task: string
}

Task.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    task: { type: DataTypes.STRING },
  },
  { modelName: 'Task', sequelize, createdAt: false, updatedAt: false }
)

Task.belongsTo(User, { foreignKey: { name: 'user' } })
