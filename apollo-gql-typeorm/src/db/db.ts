import { DataSource } from 'typeorm'
import { Task } from './models/task.js'

export const db = new DataSource({
  type: 'sqlite',
  database: './db',
  synchronize: true,
  entities: [Task]
})
