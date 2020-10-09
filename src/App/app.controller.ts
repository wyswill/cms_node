import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiBody, ApiConsumes } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileUploadDto } from "src/dto/FileUploadDto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post("/uploadFile")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    description: "List of cats",
    type: FileUploadDto,
  })
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file) {
    return this.appService.fileHandler(file);
  }
}
