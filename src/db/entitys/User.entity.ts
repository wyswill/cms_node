import { Entity, Column } from "typeorm";
import BaseEntity from "../Base.entity";

/*
 * @LastEditors: wyswill
 * @Description: user entity
 * @Date: 2020-09-08 18:34:52
 * @LastEditTime: 2020-10-10 11:56:39
 */
@Entity()
export default class User extends BaseEntity {
  @Column() name: string; //姓名
  @Column() password: string; //密码
  @Column({ nullable: true, type: "int" }) age: number; //年龄
  @Column({ nullable: true }) sex: string; //性别
  @Column({ nullable: true }) email: string; //邮箱
  @Column({ nullable: true }) mobile: string; //手机号
  @Column({ nullable: true }) avatar_url: string; //头像url
  @Column({ nullable: true }) province: string; //省
  @Column({ nullable: true }) city: string; //城市
  @Column({ nullable: true }) job_name: string; //职业名称
  @Column({ nullable: true, type: "int" }) notification_unread: number; //未读系统通知
  @Column({ nullable: true, type: "int" }) inbox_unread: number; //未读用户通知
}
