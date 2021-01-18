import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port, host, function () {
        console.log('Server started.......')
  });
}
bootstrap();
