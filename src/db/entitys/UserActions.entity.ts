/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-10-10 11:52:06
 * @LastEditTime: 2020-10-10 11:57:50
 */
import { Column, Entity } from "typeorm";
import BaseEntity from "../Base.entity";
@Entity()
export default class UserActionsNntity extends BaseEntity {
  @Column()
  type: string;
  @Column()
  action: string;
}
