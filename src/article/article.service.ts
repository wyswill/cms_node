/*
 * @LastEditors: wyswill
 * @Description: 文章服务
 * @Date: 2020-09-18 16:31:20
 * @LastEditTime: 2020-10-10 10:08:40
 */
import { Inject, Injectable, HttpException } from "@nestjs/common";
import { Repository } from "typeorm";
import Article from "src/db/entitys/Article.entity";
import Comment from "../db/entitys/Comment.entity";
import { GetArticleParme, ModifArticleDto, toggleZanArticleDto } from "src/dto/article";

@Injectable()
export class ArticleService {
  constructor(@Inject("Article_db") private readonly article_db: Repository<Article>, @Inject("Comment_db") private readonly comment_db: Repository<Comment>) {}
  /**
   * 创建文章
   * @param article 文章内容
   */
  async createArticle(article: Article) {
    const _articles = new Article();
    Object.assign(_articles, article);
    _articles.lastModified = new Date().getTime().toString();
    await this.article_db.insert(_articles);
  }
  /**
   * 分页获取文章
   * @param config 分页信息
   */
  async getArticles(config: GetArticleParme) {
    return this.article_db.find({
      skip: 10 * (config.currentPage - 1),
      take: config.articleNumber,
    });
  }
  /**
   * 修改文章
   * @param info 新的文章内容
   */
  async modifiAritcle(info: ModifArticleDto) {
    const _arti = await this.article_db.findOne(info.id);
    if (!_arti) return new HttpException("文章修改失败", -1);
    _arti.content = info?.content;
    _arti.tag = info?.tag;
    _arti.lastModified = new Date().getTime().toString();
    await this.article_db.save(_arti);
    return new HttpException("修改文章完成", 0);
  }
  /**
   * 评论文章
   * @param content 评论内容
   */
  async postComment(content: Comment) {
    const _comments = new Comment();
    Object.assign(_comments, content);
    await this.comment_db.insert(_comments);
  }
  /**
   * 删除帖子，同时删除评论
   * @param id 帖子id
   */
  async deleteArticleById(id: number) {
    const _arti = await this.article_db.findOne(id),
      _comment = await this.comment_db.find({ where: { articleId: id } });
    if (_comment) _comment.map(async (ele) => await this.comment_db.remove(ele));
    if (_arti) {
      await this.article_db.remove(_arti);
      return new HttpException("删除完成", 0);
    } else return new HttpException("删除失败", -1);
  }
  /**
   * 文章点赞
   * @param info 赞信息
   */
  async toggleZanOrCaiArticle(info: toggleZanArticleDto) {
    const _arti = await this.article_db.findOne(info.id);
    if (!_arti) return new HttpException("文章未找到", -1);
    if (info.type == "zan") _arti.zan = info.status;
    else _arti.tread = info.status;
    await this.article_db.save(_arti);
    return new HttpException("操作成功!", 0);
  }
}
