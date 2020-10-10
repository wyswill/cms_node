/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-09-18 10:43:37
 * @LastEditTime: 2020-10-10 11:52:18
 */
import { Entity, Column } from "typeorm";
import BaseEntity from "../Base.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export default class Article extends BaseEntity {
  @ApiProperty({ description: "标题" })
  @Column("text")
  title: string;
  @ApiProperty({ description: "标签" })
  @Column()
  tag: string;
  @ApiProperty({ description: "作者" })
  @Column("text")
  author: string;
  @ApiProperty({ description: "内容" })
  @Column("text")
  content: string;
  @Column() lastModified: string; //最后修改时间
  @ApiProperty({ description: "赞", type: Number })
  @Column({ default: 0 })
  zan: number; //赞
  @ApiProperty({ description: "踩", type: Number })
  @Column({ default: 0 })
  tread: number; //踩
}
