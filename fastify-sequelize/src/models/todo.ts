import {
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
  declare task: string
}

Todo.init(
  {
    task: { type: DataTypes.STRING }
  },
  { sequelize }
)
