import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export const Categories = {
  Action: 'action',
  Simulation: 'simulation',
  Life: 'life',
} as const;
export type CategoryType = typeof Categories[keyof typeof Categories];

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number

  @Column('varchar', { length: 100 })
  name: CategoryType

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  constructor(name: CategoryType) {
    this.name = name
  }
}
