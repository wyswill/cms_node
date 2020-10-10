import { SystemProvider } from "./../system/system.provider";
import { Module } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { ArticleController } from "./article.controller";
import { entityProviders } from "../db/entityProviders/entity.provider";

@Module({
  providers: [ArticleService, ...entityProviders, SystemProvider],
  controllers: [ArticleController],
})
export class ArticleModule {}
