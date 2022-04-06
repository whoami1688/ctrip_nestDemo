import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//nest监听3000端口，作业在 12.0.0.1:3000 根路由展示
//需要向express服务器发送请求，请先运行express服务器到8000端口
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
