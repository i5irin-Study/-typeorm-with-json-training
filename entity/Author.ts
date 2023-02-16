import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { App } from "./App"

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id?: number

  @Column('varchar', { length: 100 })
  name: string

  @OneToMany(type => App, post => post.author)
  posts?: App[]

  @CreateDateColumn()
  readonly createdAt?: Date

  @UpdateDateColumn()
  readonly updatedAt?: Date

  constructor(name: string) {
    this.name = name
  }
}
