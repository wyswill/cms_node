/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-09-18 10:56:26
 * @LastEditTime: 2020-10-10 11:57:00
 */
import { Column, Entity } from "typeorm";
import User from "./User.entity";
import Article from "./Article.entity";
import BaseEntity from "../Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export default class Comment extends BaseEntity {
  @ApiProperty({ description: "用户id", default: 0 })
  @Column()
  authorId: number;
  @ApiProperty({ description: "文章id", default: 0 })
  @Column()
  articleId: number;
  @ApiProperty({ description: "评论内容", default: "asdfasdf" })
  @Column("text")
  content: string;
  @Column()
  lastModified: string;
  @ApiProperty({ description: "赞", default: 0 })
  @Column({ nullable: true })
  zan: number;
  @ApiProperty({ description: "踩", default: 0 })
  @Column({ nullable: true })
  tread: number;
}
