import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import Moralis from 'moralis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Marketplace Api')
    .setDescription('Marketplace Api Description')
    .setVersion('1.0')
    .addTag('marketplace')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });
  await app.listen(9000);
}
bootstrap();
