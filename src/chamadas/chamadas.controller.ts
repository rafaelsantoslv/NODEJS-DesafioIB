import { Controller, Get } from '@nestjs/common';
import { ChamadasService } from './chamadas.service';

@Controller('chamadas')
export class ChamadasController {
  constructor(private readonly chamadasService: ChamadasService) {}

  @Get()
  async testConnectionDatabase(): Promise<any> {
    return this.chamadasService.findAll();
  }

  @Get('dados')
  async fetchData(): Promise<any> {
    return this.chamadasService.fetchJsonData();
  }
}
