import { Inject, Injectable, HttpException } from "@nestjs/common";
import { Repository } from "typeorm";
import User from "../db/entitys/User.entity";

@Injectable()
export class UserService {
  constructor(@Inject("User_db") private readonly user_db: Repository<User>) {
  }

  async getUserInfo(userInfo: any) {
    return await this.user_db.findOne({ name: userInfo.name }, {
      select: ["name", "age", "avatar_url", "city", "email", "inbox_unread", "job_name", "mobile", "notification_unread", "province", "sex"],
    });
  }

  async modifyUser(user: User, name: string) {
    const oldUser = await this.user_db.findOne({ name });
    if (oldUser) {
      Object.assign(oldUser, user);
      return await this.user_db.save(oldUser);
    } else return new HttpException("用户未找到", 1);
  }


}
