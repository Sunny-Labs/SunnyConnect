import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { GetTheRibService, RIB } from './get-the-rib.service';

@Controller('get-the-rib')
export class GetTheRibController {
  constructor(private readonly getTheRibService: GetTheRibService) {}

  @Post()
  async getTheRib(@Body() body) {
    try {
      const rib: RIB = this.getTheRibService.get(body.password);
      return rib;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }
}
