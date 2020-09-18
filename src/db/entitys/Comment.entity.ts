import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";
import Article from "./Article.entity";

@Entity()
export default class Comment {
  @PrimaryGeneratedColumn() private readonly id: number;
  @JoinColumn()
  @OneToOne(type => User) author: User;
  @JoinColumn()
  @OneToOne(type => Article) article: Article;
  @Column() lastModified: string;//最后修改时间
  @Column() zan: number;//赞
  @Column() tread: number;//踩
}
