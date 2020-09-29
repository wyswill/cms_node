/*
 * @LastEditors: wyswill
 * @Description: 文章服务
 * @Date: 2020-09-18 16:31:20
 * @LastEditTime: 2020-09-29 14:31:28
 */
import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import Article from "src/db/entitys/Article.entity";

@Injectable()
export class ArticleService {
  constructor(@Inject("Article_db") private readonly article_db: Repository<Article>) {
  }

  async createArticle(article: Article) {
    const _articles = new Article();
    Object.assign(_articles, article);
    _articles.lastModified = new Date().getTime().toString();
    await this.article_db.insert(_articles);
  }

  async getArticles(config: GetArticleParme) {
    return this.article_db.find({
      skip: 10 * (config.currentPage - 1),
      take: config.articleNumber,
    });
  }
}
