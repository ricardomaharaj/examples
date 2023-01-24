import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model
} from 'sequelize'
import { sequelize } from '../db'

export class Todo extends Model<
  InferAttributes<Todo>,
  InferCreationAttributes<Todo>
> {
  declare id: CreationOptional<number>
  declare task: string
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    task: { type: DataTypes.STRING }
  },
  { sequelize }
)
