import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import Article from "src/db/entitys/Article.entity";

@Injectable()
export class ArticleService {
  constructor(@Inject("Article_db") private readonly article_db: Repository<Article>) {
  }


}
