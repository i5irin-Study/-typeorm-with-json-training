import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm"
import { Author } from "./Author";
import { Category } from "./Category";

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

  @Column({ name: 'category_id' })
  readonly categoryId: number

  @ManyToOne(type => Category, { nullable: false, cascade: ['insert', 'update'], onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'category_id' })
  category?: Category

  constructor(id: number, title: string, body: string, isPublished: boolean, authorId: number, categoryId: number) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.isPublished = isPublished;
    this.authorId = authorId;
    this.categoryId = categoryId;
  }
}
