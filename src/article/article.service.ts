import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import Article from "src/db/entitys/Article.entity";
import User from "../db/entitys/User.entity";

@Injectable()
export class ArticleService {
  constructor(@Inject("Article_db") private readonly article_db: Repository<Article>,
              @Inject("User_db") private readonly user_db: Repository<User>) {
  }

  async createArticle(article: Article) {
    const _articles = new Article();
    Object.assign(_articles, article);
    // const _user = await this.user_db.findOne({ name: article.author });
    _articles.lastModified = new Date().getTime().toString();
    await this.article_db.insert(_articles);
  }

}
