import { Module } from '@nestjs/common';
import { GetTheRibService } from './get-the-rib.service';
import { GetTheRibController } from './get-the-rib.controller';

@Module({
  providers: [GetTheRibService],
  controllers: [GetTheRibController],
})
export class GetTheRibModule {}
