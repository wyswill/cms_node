/*
 * @LastEditors: wyswill
 * @Description: 文章控制器
 * @Date: 2020-09-18 16:32:00
 * @LastEditTime: 2020-10-12 09:52:09
 */
import { Body, Controller, Get, HttpException, Param, Post, Query } from "@nestjs/common";
import { ArticleService } from "./article.service";
import Article from "../db/entitys/Article.entity";
import { check } from "src/util/check";
import { deleteArticleDto, GetArticleParme, ModifArticleDto, toggleZanArticleDto } from "src/dto/article";
import Comment from "../db/entitys/Comment.entity";

@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post("/createArticle")
  async createArticle(@Body() article: Article) {
    await this.articleService.createArticle(article);
  }

  @Get("/getArticle")
  async getArticle(@Query() config: GetArticleParme) {
    if (!check(config, ["currentPage", "articleNumber"])) new HttpException("参数不对", 1);
    return await this.articleService.getArticles(config);
  }

  @Post("/modifiAritcle")
  modifiAritcle(@Body() articleInfo: ModifArticleDto) {
    return this.articleService.modifiAritcle(articleInfo);
  }

  @Post("/commentArticle")
  async postComment(@Body() content: Comment) {
    Reflect.set(content, "lastModified", new Date().getTime());
    return await this.articleService.postComment(content);
  }

  @Post("/deleteArticle")
  deleteArticle(@Body() articleInfo: deleteArticleDto) {
    return this.articleService.deleteArticleById(articleInfo.id);
  }

  @Get("/zanOrCaiArticle")
  zanOrCaiArticle(@Query() info: toggleZanArticleDto) {
    return this.articleService.toggleZanOrCaiArticle(info);
  }
}
