import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { entityProviders } from "../db/entityProviders/entity.provider";

@Module({
  providers: [UserService, ...entityProviders],
  controllers: [UserController],
})
export class UserModule {


}
