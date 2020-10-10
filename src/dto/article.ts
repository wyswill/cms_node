import { ApiProperty } from "@nestjs/swagger";

export class GetArticleParme {
  @ApiProperty({ description: "当前页面", default: 1 })
  currentPage: number;
  @ApiProperty({ description: "文章数量", default: 10 })
  articleNumber: number;
}

export class deleteArticleDto {
  @ApiProperty({ description: "文章ID", default: 1 })
  id: number;
}
export class ModifArticleDto {
  @ApiProperty({ description: "文章ID", default: 1 })
  id: number;
  @ApiProperty({ description: "新内容", default: "" })
  content: string;
  @ApiProperty({ description: "新标签", default: "" })
  tag: string;
}

export class toggleZanArticleDto {
  @ApiProperty({ description: "文章ID", default: 1 })
  id: number;
  @ApiProperty({ description: "赞或是取消赞", default: 1, enum: [0, 1] })
  status: number;
  @ApiProperty({ description: "踩或是赞", default: "zan", enum: ["zan", "cai"] })
  type: string;
}
