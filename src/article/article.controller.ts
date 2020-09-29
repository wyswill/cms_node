/*
 * @LastEditors: wyswill
 * @Description: 文章控制器
 * @Date: 2020-09-18 16:32:00
 * @LastEditTime: 2020-09-29 11:57:03
 */
import { Body, Controller, Get, HttpException, Param, Post, Query } from "@nestjs/common";
import { ArticleService } from "./article.service";
import Article from "../db/entitys/Article.entity";
import { check } from "src/util/check";

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {
  }

  @Post("/createArticle")
  createArticle(@Body() article: Article) {
    this.articleService.createArticle(article);
  }

  @Get("/getArticle")
  async getArticle(@Query() config: GetArticleParme) {
    if (!check(config, ["currentPage", "articleNumber"])) new HttpException("参数不对", 1);
    return await this.articleService.getArticles(config);
  }

  @Post("/commentArticle")
  async postComment(@Body() content: CommentArticleBody) {
    Reflect.set(content, "lastEditedTime", new Date().getTime());
    if (!check(content, ["articleId", "commentContent", "userId", "lastEditedTime"])) return new HttpException("参数不对", 1);
    return await this.articleService.postComment(content);
  }
}
