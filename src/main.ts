import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './exception/http_exception_filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3000);
}

bootstrap();
