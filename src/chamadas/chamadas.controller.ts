import { Controller, Get } from '@nestjs/common';
import { ChamadasService } from './chamadas.service';

@Controller('chamadas')
export class ChamadasController {
  constructor(private readonly chamadasService: ChamadasService) {}

  @Get()
  relatorio() {
    return this.chamadasService.findAll();
  }

  @Get('dados')
  fetchData() {
    return this.chamadasService.ChamadasInsert();
  }
}
