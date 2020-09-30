import { Body, Controller, Get, Post, Request, Session } from "@nestjs/common";
import { LoginService } from "./login.service";


@Controller("login")
export class LoginController {
  constructor(private loginService: LoginService) {
  }

  @Get("/getCode")
  getCode(@Session() session) {
    const codes = this.loginService.getCode();
    session.code = codes.text;
    return codes;
  }

  @Post("/loginWithCode")
  async loginWithCode(@Body() body: loginBody) {
    return await this.loginService.lgoinWithCode(body.name, body.password, body.code);
  }

}
