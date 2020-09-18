import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import User from "./User.entity";

@Entity()
export default class Article {
  @PrimaryGeneratedColumn() private readonly id: number;
  @Column("text") title: string;
  @Column() tag: string;
  @JoinColumn()
  @OneToOne(type => User) author: User;
  @Column() lastModified: string;//最后修改时间
  @Column() zan: number;//赞
  @Column() tread: number;//踩
}
