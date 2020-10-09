import { HttpException, Injectable } from "@nestjs/common";

const fs = require("fs"), path = require("path");

@Injectable()
export class AppService {
  fileHandler(file) {
    const savePath = path.resolve(__dirname, "../../upload");
    let res = new HttpException("文件上传成功", 0);
    if (!fs.existsSync(savePath)) fs.mkdirSync(savePath);
    const ext = file.mimetype.split("/").pop();
    console.log(`${savePath}/${Date.now()}.${ext}`);
    fs.writeFile(`${savePath}/${Date.now()}.${ext}`, file.buffer, err => {
      if (err) res = new HttpException("文件上传失败", -1);
    });
    return res;
  }
}
