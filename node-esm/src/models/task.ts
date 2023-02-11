import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../db.js";

export class Task extends Model<
  InferAttributes<Task>,
  InferCreationAttributes<Task>
> {
  declare id: CreationOptional<number>;
  declare task: string;
}

Task.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    task: { type: DataTypes.STRING },
  },
  { modelName: "Task", sequelize, createdAt: false, updatedAt: false }
);
