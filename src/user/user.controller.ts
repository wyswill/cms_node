import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import User from "../db/entitys/User.entity";

@Controller("user")
export class UserController {
  constructor(private readonly  userService: UserService) {
  }

  @Get("/userInfo")
  getUserInfoByName(@Query("name") name: string) {
    return this.userService.getUserInfo({ name });
  }

  @Post("/modifyUser")
  modifyUser(@Body() user: User, @Query("name") name: string) {
    return this.userService.modifyUser(user, name);
  }

}
