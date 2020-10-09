import { Body, Controller, Get, HttpException, Post, Query } from "@nestjs/common";
import { ArticleService } from "./article.service";
import Article from "../db/entitys/Article.entity";
import { check } from "src/util/check";
import { GetArticleParme } from "src/dto/article";
import Comment from "../db/entitys/Comment.entity";

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {
  }

  @Post("/createArticle")
  async createArticle(@Body() article: Article) {
    await this.articleService.createArticle(article);
  }

  @Get("/getArticle")
  async getArticle(@Query() config: GetArticleParme) {
    if (!check(config, ["currentPage", "articleNumber"])) new HttpException("参数不对", 1);
    return await this.articleService.getArticles(config);
  }

  @Post("/commentArticle")
  async postComment(@Body() content: Comment) {
    Reflect.set(content, "lastModified", new Date().getTime());
    return await this.articleService.postComment(content);
  }
}
