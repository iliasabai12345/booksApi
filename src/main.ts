import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Автоматический удаляет лишние поля смотря на dto
    forbidNonWhitelisted: true // Если есть ненужные поля то возвращяет ошибку
  }));
  const config = new DocumentBuilder()
    .setTitle("Books store")
    .setDescription("Books store description")
    .setVersion("1.0")
    // .addTag("cats")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  await app.listen(3000);
}
bootstrap();
