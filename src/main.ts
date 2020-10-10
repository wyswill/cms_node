import { NestFactory } from "@nestjs/core";
import { AppModule } from "./App/app.module";
import * as session from "express-session";
// @ts-ignore
const { port } = require("../package.json");
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** seeion start */
  app.use(session({ secret: "qwertyuiop~!@#$%^&*", resave: false, saveUninitialized: true }));
  /** seeion end */

  const options = new DocumentBuilder()
    .setTitle("cms_api")
    .setDescription("node_cms_api")
    .setVersion("0.0.1")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("/api", app, document);

  await app.listen(port);
}

bootstrap();
