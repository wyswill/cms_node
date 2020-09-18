import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/*
 * @LastEditors: wyswill
 * @Description: user entity
 * @Date: 2020-09-08 18:34:52
 * @LastEditTime: 2020-09-08 19:13:35
 */
@Entity()
export default class User {
  @PrimaryGeneratedColumn() private readonly id: number;
  @Column() name: string;//姓名
  @Column("int") age: number;//年龄
  @Column() sex: string;//性别
  @Column() email: string;//邮箱
  @Column() mobile: string;//手机号
  @Column() password: string;//密码
  @Column() avatar_url: string;//头像url
  @Column() province: string;//省
  @Column() city: string;//城市
  @Column() job_name: string;//职业名称
  @Column("int") notification_unread: number;//未读系统通知
  @Column("int") inbox_unread: number;//未读用户通知
}
