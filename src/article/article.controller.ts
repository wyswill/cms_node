import { Body, Controller, Post } from "@nestjs/common";
import { ArticleService } from "./article.service";
import Article from "../db/entitys/Article.entity";

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {
  }

  @Post("/createArticle")
  createArticle(@Body() article: Article) {
    this.articleService.createArticle(article);
  }
}
