/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-09-08 18:39:36
 * @LastEditTime: 2020-09-08 19:31:57
 */
import { Connection } from "typeorm";
import User from "../entitys/User.entity";
import Article from "../entitys/Article.entity";
import Comment from "../entitys/Comment.entity";

export const entityProviders = [
  {
    provide: "User_db",
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ["DbConnectionToken"],
  },
  {
    provide: "Article_db",
    useFactory: (connection: Connection) => connection.getRepository(Article),
    inject: ["DbConnectionToken"],
  },
  {
    provide: "Comment_db",
    useFactory: (connection: Connection) => connection.getRepository(Comment),
    inject: ["DbConnectionToken"],
  },
];
