import { Module } from "@nestjs/common";
import { LoginService } from "./login.service";
import { LoginController } from "./login.controller";
import { DatabaseModule } from "../db/database.module";
import { entityProviders } from "../db/entityProviders/entity.provider";

@Module({
  imports: [DatabaseModule],
  providers: [LoginService, ...entityProviders],
  controllers: [LoginController],
})
export class LoginModule {
}
