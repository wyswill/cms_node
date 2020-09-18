import { NestFactory } from "@nestjs/core";
import { AppModule } from "./App/app.module";
import * as session from "express-session";
// @ts-ignore
const { port } = require("../package.json");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** seeion start */
  app.use(session({ secret: "qwertyuiop~!@#$%^&*" }));
  /** seeion end */

  await app.listen(port);
}

bootstrap();
