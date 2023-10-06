import { Module } from '@nestjs/common';
import { SireneController } from './sirene.controller';
import { SireneService } from './sirene.service';

@Module({
  controllers: [SireneController],
  providers: [SireneService],
})
export class SireneModule {}
