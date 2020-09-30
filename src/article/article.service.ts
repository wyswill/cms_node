import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import Article from "src/db/entitys/Article.entity";
import Comment from "../db/entitys/Comment.entity";
import { GetArticleParme } from "src/dto/article";

@Injectable()
export class ArticleService {
  constructor(@Inject("Article_db") private readonly article_db: Repository<Article>, @Inject("Comment_db") private readonly comment_db: Repository<Comment>) {
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

  async postComment(content: Comment) {
    const _comments = new Comment();
    Object.assign(_comments, content);
    await this.comment_db.insert(_comments);
  }
}
