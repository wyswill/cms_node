import { Inject, Injectable } from "@nestjs/common";
import User from "../db/entitys/User.entity";
import { Repository } from "typeorm";
import { loginErr } from "./utile_login";

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

  async lgoinWithCode(name: string, password: string, code: string): Promise<loginErr> {
    this.checkUserInfo(name, password);
    const _user = await this.user_db.findOne({ where: { name } });
    if (_user) return new loginErr(0, "登陆成功");
    else return new loginErr(1, "登陆失败");
  }

  checkUserInfo(name: string, password: string) {
    if (!name) return new loginErr(1, "姓名不能为空");
    if (!password) return new loginErr(1, "密码不能为空");
  }
}
