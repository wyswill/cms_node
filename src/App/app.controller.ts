/*
 * @LastEditors: wyswill
 * @Description: 公共
 * @Date: 2020-09-18 09:46:50
 * @LastEditTime: 2020-10-09 16:59:53
 */
import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiBody, ApiConsumes } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileUploadDto } from "src/dto/FileUploadDto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/uploadFile")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    description: "文件上传",
    type: FileUploadDto,
  })
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file) {
    return this.appService.fileHandler(file);
  }
}
