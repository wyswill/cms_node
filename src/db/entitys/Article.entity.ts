import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import User from "./User.entity";
import BaseEntity from "../Base.entity";

@Entity()
export default class Article extends BaseEntity {
  @Column("text") title: string;
  @Column() tag: string;
  @JoinColumn()
  @OneToOne(type => User) author: User;
  @Column() lastModified: string;//最后修改时间
  @Column({ nullable: true }) zan: number;//赞
  @Column({ nullable: true }) tread: number;//踩
}
