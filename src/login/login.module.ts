import { Module } from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginController } from "./login.controller";
import { entityProviders } from "../db/entityProviders/entity.provider";

@Module({
  providers: [LoginService, ...entityProviders],
  controllers: [LoginController],
})
export class LoginModule {
}
