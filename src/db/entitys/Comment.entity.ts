import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";
import Article from "./Article.entity";
import BaseEntity from "../Base.entity";

@Entity()
export default class Comment extends BaseEntity {
  @JoinColumn()
  @OneToOne(type => User) author: User;
  @JoinColumn()
  @OneToOne(type => Article) article: Article;
  @Column() lastModified: string;//最后修改时间
  @Column({ nullable: true }) zan: number;//赞
  @Column({ nullable: true }) tread: number;//踩
}
