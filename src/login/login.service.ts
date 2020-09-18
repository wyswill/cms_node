import { HttpException, Inject, Injectable } from "@nestjs/common";
import User from "../db/entitys/User.entity";
import { Repository } from "typeorm";

// @ts-ignore
const svgCaptcha = require("svg-captcha");

@Injectable()
export class LoginService {
  constructor(@Inject("User_db") private user_db: Repository<User>) {
  }

  getCode(): codeRes {
    return svgCaptcha.create({
      width: 85,
      height: 38,
    });
  }

  async lgoinWithCode(name: string, password: string, code: string): Promise<HttpException> {
    this.checkUserInfo(name, password);
    const _user = await this.user_db.findOne({ where: { name } });
    if (_user) return new HttpException("登陆成功", 0);
    else return new HttpException("登陆失败", 1);
  }

  checkUserInfo(name: string, password: string) {
    if (!name) return new HttpException("姓名不能为空", 1);
    if (!password) return new HttpException("密码不能为空", 1);
  }
}
