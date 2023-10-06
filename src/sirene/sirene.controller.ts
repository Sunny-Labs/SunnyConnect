import { Controller, Get, Param } from '@nestjs/common';
import { SireneService } from './sirene.service';

@Controller('sirene')
export class SireneController {
  constructor(private readonly sireneService: SireneService) {}
  @Get('/:siren')
  async getInfo(@Param('siren') siren: string): Promise<object> {
    return this.sireneService.getInfo(siren);
  }
  @Get('/:siren/siege')
  async getSiege(@Param('siren') siren: string): Promise<object> {
    console.log(siren);
    const info = await this.sireneService.getInfo(siren);
    console.log(info);
    const siege =
      info['uniteLegale']['periodesUniteLegale'][0]['nicSiegeUniteLegale'];
    const siret = siren + siege;
    console.log(siret);
    return this.sireneService.getSiretInfo(siret);
  }
}
