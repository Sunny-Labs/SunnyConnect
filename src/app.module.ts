import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SireneModule } from './sirene/sirene.module';
import { GetTheRibModule } from './get-the-rib/get-the-rib.module';

@Module({
  imports: [SireneModule, GetTheRibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
