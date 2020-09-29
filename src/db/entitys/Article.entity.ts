/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-09-18 10:43:37
 * @LastEditTime: 2020-09-29 11:21:18
 */
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import User from "./User.entity";
import BaseEntity from "../Base.entity";

@Entity()
export default class Article extends BaseEntity {
  @Column("text") title: string;
  @Column() tag: string;
  @Column("text") author: string;
  @Column("text") content: string;
  @Column() lastModified: string; //最后修改时间
  @Column({ default: 0 }) zan: number; //赞
  @Column({ default: 0 }) tread: number; //踩
}
