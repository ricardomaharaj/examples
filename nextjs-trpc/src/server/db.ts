import { DataSource } from 'typeorm'
import { Task } from './models/task'

export const db = new DataSource({
  type: 'sqlite',
  database: './db',
  synchronize: true,
  entities: [Task],
})

db.initialize()
