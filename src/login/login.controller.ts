import { Body, Controller, Get, Post, Request } from "@nestjs/common";
import { LoginService } from "./login.service";


@Controller("login")
export class LoginController {
  constructor(private loginService: LoginService) {
  }

  @Get("/getCode")
  getCode(@Request() req) {
    const codes = this.loginService.getCode();
    req.session.code = codes.text;
    return codes;
  }

  @Post("/loginWithCode")
  async loginWithCode(@Body() body: loginBody) {
    const res = await this.loginService.lgoinWithCode(body.name, body.password, body.code);
    console.log(res);
    return res;
  }

  @Get("/userInfo")
  async getUserinfo() {
    return await this.loginService.getUserinfo();
  }

}
