import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';

const { port } = require('../package.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

bootstrap();
