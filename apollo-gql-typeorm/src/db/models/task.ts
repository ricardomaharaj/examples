import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  declare id: string

  @Column()
  declare task: string

  @CreateDateColumn()
  declare createdAt: Date

  @UpdateDateColumn()
  declare updatedAt: Date
}
