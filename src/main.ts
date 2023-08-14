import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: '*', // Domaine autorisé à accéder aux ressources
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Autorise les cookies et les en-têtes d'authentification
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
