import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoginModule } from "../login/login.module";
import { UserModule } from "../user/user.module";
import { DatabaseModule } from "../db/database.module";
import { ArticleModule } from "../article/article.module";

@Module({
  imports: [LoginModule, UserModule, DatabaseModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
