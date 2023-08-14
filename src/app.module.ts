import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SireneModule } from './sirene/sirene.module';

@Module({
  imports: [SireneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
