import { NestFactory } from "@nestjs/core";
import { AppModule } from "./App/app.module";
import * as session from "express-session";
// @ts-ignore
const { port } = require("../package.json");
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** seeion start */
  app.use(session({ secret: "qwertyuiop~!@#$%^&*" }));
  /** seeion end */

  const options = new DocumentBuilder()
    .setTitle("houduan")
    .setDescription("我的第一个nest 后端")
    .setVersion("0.0.1")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("/api", app, document);

  await app.listen(port);
}

bootstrap();
