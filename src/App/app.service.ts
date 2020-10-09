/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-09-18 09:46:50
 * @LastEditTime: 2020-10-09 17:05:02
 */
import { HttpException, Injectable } from "@nestjs/common";

const fs = require("fs"),
  path = require("path");

@Injectable()
export class AppService {
  fileHandler(file) {
    const savePath = path.resolve(__dirname, "../../upload");
    let res = new HttpException("文件上传成功", 0);
    if (!fs.existsSync(savePath)) fs.mkdirSync(savePath);
    const ext = file.mimetype.split("/").pop();
    fs.writeFile(
      `${savePath}/${Date.now()}_${Math.random()
        .toString(32)
        .substr(-4)}.${ext}`,
      file.buffer,
      (err) => {
        if (err) res = new HttpException("文件上传失败", -1);
      }
    );
    return res;
  }
}
