import { Controller, Get, Param } from "@nestjs/common";
import { SireneService } from "./sirene.service";

@Controller('sirene')
export class SireneController {
  constructor(private readonly sireneService: SireneService) {}
  @Get(':siren')
  async getInfo(@Param('siren') siren: string): Promise<object> {
    return this.sireneService.getInfo(siren);
  }
}
