import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  declare id: string

  @Column()
  declare task: string

  @CreateDateColumn()
  declare createdAt: Date

  @UpdateDateColumn()
  declare updatedAt: Date
}
