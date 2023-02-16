import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import { Author } from "./Author";

@Entity()
export class App {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar', { length: 100 })
  title: string

  @Column('text')
  body: string

  @Column('tinyint', { name: 'is_published' })
  isPublished: boolean

  @Column({ name: 'author_id' })
  readonly authorId: number

  @ManyToOne(type => Author, author => author.posts, { nullable: false, cascade: ['insert', 'update'], onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'author_id' })
  author?: Author

  constructor(id: number, title: string, body: string, isPublished: boolean, authorId: number) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.isPublished = isPublished;
    this.authorId = authorId;
  }
}
