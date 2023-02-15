import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
  })
  title: string

  @Column("text")
  body: string

  @Column()
  isPublished: boolean

  constructor(id: number, title: string, body: string, isPublished: boolean) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.isPublished = isPublished;
  }
}
