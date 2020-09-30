import { ApiProperty } from "@nestjs/swagger";

export class GetArticleParme {
  @ApiProperty({ description: "当前页面", default: 1 })
  currentPage: number;
  @ApiProperty({ description: "文章数量", default: 10 })
  articleNumber: number;
}